// server.js - Version production pour Render
const express = require('express');
const nodemailer = require('nodemailer');
const path = require('path');
const app = express();

// Configuration Email avec variables d'environnement pour la sécurité
const EMAIL_CONFIG = {
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER || 'oussamakanouni39@gmail.com',
        pass: process.env.EMAIL_PASS || 'urhu hygf gftt ycjl'
    }
};

const RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL || 'oussamaknouni39@gmail.com';

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Middleware CORS pour permettre les requêtes cross-origin
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
        res.sendStatus(200);
    } else {
        next();
    }
});

// Configuration du transporteur email
const transporter = nodemailer.createTransporter({
    service: EMAIL_CONFIG.service,
    auth: EMAIL_CONFIG.auth
});

// Fonction de génération du code quotidien
function generateDailyCode() {
    const today = new Date();
    const dateStr = today.toISOString().slice(0, 10).replace(/-/g, '');
    const seed = "TIS" + dateStr;
    
    let hash = 0;
    for (let i = 0; i < seed.length; i++) {
        hash = ((hash << 5) - hash) + seed.charCodeAt(i);
        hash = hash & hash;
    }
    
    const alphaNum = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let code = 'TIS';
    const hashAbs = Math.abs(hash);
    for (let i = 0; i < 5; i++) {
        code += alphaNum.charAt(hashAbs % alphaNum.length);
        hash = Math.floor(hash / alphaNum.length);
    }
    
    return code;
}

// Route de santé pour Render (obligatoire pour le monitoring)
app.get('/health', (req, res) => {
    res.json({ 
        status: 'OK',
        service: 'TIS Server',
        timestamp: new Date().toISOString(),
        code: generateDailyCode(),
        timezone: 'Africa/Casablanca',
        environment: process.env.NODE_ENV || 'development'
    });
});

// Route racine
app.get('/', (req, res) => {
    res.json({
        message: '🚀 Serveur TIS opérationnel',
        code: generateDailyCode(),
        timestamp: new Date().toISOString(),
        endpoints: {
            health: '/health',
            code: '/api/code',
            sendEmail: '/send-email (POST)',
            testEmail: '/test-email-config',
            sendDaily: '/send-daily-code (POST)'
        }
    });
});

// Route pour envoyer Email
app.post('/send-email', async (req, res) => {
    try {
        const code = generateDailyCode();
        const currentDate = new Date();
        
        const mailOptions = {
            from: EMAIL_CONFIG.auth.user,
            to: RECIPIENT_EMAIL,
            subject: '🔐 Code d\'accès TIS - Production Server',
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
                    <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 15px; text-align: center; color: white; margin-bottom: 20px;">
                        <h1 style="margin: 0; font-size: 2.5em;">🔐</h1>
                        <h2 style="margin: 10px 0;">Code d'accès TIS</h2>
                        <p style="margin: 0; opacity: 0.9;">Production Server - Déployé sur Render</p>
                    </div>
                    
                    <div style="background: white; padding: 30px; border-radius: 15px; box-shadow: 0 5px 15px rgba(0,0,0,0.1);">
                        <div style="text-align: center; margin-bottom: 30px;">
                            <div style="background: #f8f9fa; border: 2px dashed #007bff; border-radius: 15px; padding: 25px; margin: 20px 0;">
                                <h3 style="color: #007bff; font-size: 2.5em; margin-bottom: 10px; font-family: 'Courier New', monospace; letter-spacing: 2px;">${code}</h3>
                                <p style="color: #666; font-size: 14px; margin: 0;">Code valide jusqu'à demain</p>
                            </div>
                        </div>
                        
                        <div style="background: #e3f2fd; border-left: 4px solid #2196f3; padding: 15px; margin: 20px 0; border-radius: 5px;">
                            <p style="margin: 0; font-size: 14px; color: #1976d2;">
                                <strong>📧 Email envoyé depuis le serveur de production !</strong><br>
                                📅 Date : ${currentDate.toLocaleDateString('fr-FR')}<br>
                                🕐 Heure : ${currentDate.toLocaleTimeString('fr-FR')}<br>
                                🚀 Serveur déployé sur Render<br>
                                🌐 Service 24/7 opérationnel
                            </p>
                        </div>
                        
                        <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
                            <p style="margin: 0; font-size: 12px; color: #999;">
                                Message envoyé via le serveur TIS en production<br>
                                Hébergé sur Render - Version Production 1.0
                            </p>
                        </div>
                    </div>
                </div>
            `
        };

        const info = await transporter.sendMail(mailOptions);

        res.json({
            success: true,
            messageId: info.messageId,
            code: code,
            timestamp: new Date().toISOString(),
            recipient: RECIPIENT_EMAIL,
            server: 'Production - Render'
        });

        console.log('✅ Email envoyé avec succès:', info.messageId);
        console.log('📧 Destinataire:', RECIPIENT_EMAIL);
        console.log('🔐 Code envoyé:', code);

    } catch (error) {
        console.error('❌ Erreur envoi email:', error.message);
        res.status(500).json({
            success: false,
            error: error.message,
            details: error.toString(),
            server: 'Production - Render'
        });
    }
});

// Route pour tester la configuration email
app.get('/test-email-config', async (req, res) => {
    try {
        await transporter.verify();
        res.json({
            success: true,
            message: 'Configuration email valide',
            service: EMAIL_CONFIG.service,
            user: EMAIL_CONFIG.auth.user,
            recipient: RECIPIENT_EMAIL,
            server: 'Production - Render'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: 'Configuration email invalide',
            details: error.message,
            server: 'Production - Render'
        });
    }
});

// Route pour obtenir le code du jour
app.get('/api/code', (req, res) => {
    const casablancaTime = new Date().toLocaleString('fr-FR', {
        timeZone: 'Africa/Casablanca'
    });
    
    res.json({
        code: generateDailyCode(),
        date: new Date().toLocaleDateString('fr-FR'),
        timestamp: new Date().toISOString(),
        casablancaTime: casablancaTime,
        server: 'Production - Render'
    });
});

// Fonction d'envoi automatique du code quotidien
async function sendDailyCodeEmail() {
    try {
        const code = generateDailyCode();
        const currentDate = new Date();
        
        // Formatage de la date en français (Maroc)
        const dateOptions = { 
            timeZone: 'Africa/Casablanca',
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        };
        const timeOptions = {
            timeZone: 'Africa/Casablanca',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        };
        
        const formattedDate = currentDate.toLocaleDateString('fr-FR', dateOptions);
        const formattedTime = currentDate.toLocaleTimeString('fr-FR', timeOptions);
        
        const mailOptions = {
            from: EMAIL_CONFIG.auth.user,
            to: RECIPIENT_EMAIL,
            subject: `🔐 Code TIS quotidien - ${formattedDate}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
                    <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 15px; text-align: center; color: white; margin-bottom: 20px;">
                        <h1 style="margin: 0; font-size: 2.5em;">🌅</h1>
                        <h2 style="margin: 10px 0;">Code TIS Quotidien</h2>
                        <p style="margin: 0; opacity: 0.9;">Envoi automatique - 07h00 Casablanca (Production)</p>
                    </div>
                    
                    <div style="background: white; padding: 30px; border-radius: 15px; box-shadow: 0 5px 15px rgba(0,0,0,0.1);">
                        <div style="text-align: center; margin-bottom: 30px;">
                            <h3 style="color: #333; margin-bottom: 20px;">🗓️ ${formattedDate}</h3>
                            
                            <div style="background: #f8f9fa; border: 2px dashed #007bff; border-radius: 15px; padding: 25px; margin: 20px 0;">
                                <h3 style="color: #007bff; font-size: 2.5em; margin-bottom: 10px; font-family: 'Courier New', monospace; letter-spacing: 2px;">${code}</h3>
                                <p style="color: #666; font-size: 14px; margin: 0;">Code valide jusqu'à demain 07h00</p>
                            </div>
                        </div>
                        
                        <div style="background: #e8f5e8; border-left: 4px solid #28a745; padding: 15px; margin: 20px 0; border-radius: 5px;">
                            <p style="margin: 0; font-size: 14px; color: #155724;">
                                <strong>📧 Envoi automatique quotidien (Production)</strong><br>
                                🕰️ Heure d'envoi : ${formattedTime} (Casablanca)<br>
                                🔄 Prochain envoi : Demain à 07h00<br>
                                🚀 Serveur TIS opérationnel sur Render<br>
                                🌐 Service 24/7 en production
                            </p>
                        </div>
                        
                        <div style="background: #fff3cd; border-left: 4px solid #ffc107; padding: 15px; margin: 20px 0; border-radius: 5px;">
                            <p style="margin: 0; font-size: 13px; color: #856404;">
                                <strong>ℹ️ Informations importantes :</strong><br>
                                • Le code est généré automatiquement chaque jour à minuit<br>
                                • Cet email est envoyé automatiquement à 07h00 (heure du Maroc)<br>
                                • Serveur hébergé sur Render (service cloud)<br>
                                • Vous pouvez aussi générer le code manuellement depuis l'API
                            </p>
                        </div>
                        
                        <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
                            <p style="margin: 0; font-size: 12px; color: #999;">
                                Message envoyé automatiquement par le serveur TIS<br>
                                Hébergé sur Render - Version Production avec envoi automatique
                            </p>
                        </div>
                    </div>
                </div>
            `
        };

        const info = await transporter.sendMail(mailOptions);
        
        const casablancaTime = new Date().toLocaleString('fr-FR', {
            timeZone: 'Africa/Casablanca',
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
        
        console.log(`✅ [${casablancaTime}] Email quotidien envoyé automatiquement (Production)`);
        console.log(`   📧 ID: ${info.messageId}`);
        console.log(`   🔐 Code: ${code}`);
        console.log(`   📬 Destinataire: ${RECIPIENT_EMAIL}`);
        console.log(`   🏠 Serveur: Render Production`);
        
        return { success: true, messageId: info.messageId, code: code };
        
    } catch (error) {
        const casablancaTime = new Date().toLocaleString('fr-FR', {
            timeZone: 'Africa/Casablanca'
        });
        console.error(`❌ [${casablancaTime}] Erreur envoi automatique (Production):`, error.message);
        return { success: false, error: error.message };
    }
}

// Fonction pour programmer l'envoi quotidien à 7h00 (Casablanca)
function scheduleDaily7AMEmail() {
    const now = new Date();
    
    // Obtenir l'heure actuelle au Maroc
    const casablancaTime = new Date(now.toLocaleString('en-US', {
        timeZone: 'Africa/Casablanca'
    }));
    
    // Calculer la prochaine occurrence de 7h00 au Maroc
    const next7AM = new Date(casablancaTime);
    next7AM.setHours(7, 0, 0, 0);
    
    // Si on a déjà passé 7h00 aujourd'hui, programmer pour demain
    if (casablancaTime.getTime() >= next7AM.getTime()) {
        next7AM.setDate(next7AM.getDate() + 1);
    }
    
    // Convertir en temps UTC pour setTimeout
    const next7AMUTC = new Date(next7AM.getTime() - (next7AM.getTimezoneOffset() * 60000));
    const timeUntilNext7AM = next7AMUTC.getTime() - now.getTime();
    
    console.log(`📅 [PRODUCTION] Prochain envoi automatique programmé pour: ${next7AM.toLocaleString('fr-FR', {
        weekday: 'long',
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    })} (Casablanca)`);
    
    console.log(`⏱️  Temps jusqu'au prochain envoi: ${Math.round(timeUntilNext7AM / 1000 / 60 / 60)} heures`);
    
    setTimeout(async () => {
        // Envoyer l'email quotidien
        await sendDailyCodeEmail();
        
        // Programmer le prochain envoi (dans 24h)
        scheduleDaily7AMEmail();
    }, timeUntilNext7AM);
}

// Route pour forcer l'envoi du code quotidien (pour tests)
app.post('/send-daily-code', async (req, res) => {
    try {
        console.log('🔄 Envoi manuel du code quotidien demandé...');
        const result = await sendDailyCodeEmail();
        res.json({
            ...result,
            server: 'Production - Render',
            manual: true
        });
    } catch (error) {
        console.error('❌ Erreur lors de l\'envoi manuel:', error);
        res.status(500).json({
            success: false,
            error: error.message,
            server: 'Production - Render'
        });
    }
});

// Keep-alive pour éviter que le service s'endorme (plan gratuit Render)
function keepAlive() {
    const url = process.env.RENDER_EXTERNAL_URL;
    if (url && process.env.NODE_ENV === 'production') {
        setInterval(async () => {
            try {
                const response = await fetch(`${url}/health`);
                const data = await response.json();
                console.log('🏃 Keep-alive ping:', data.status);
            } catch (error) {
                console.log('⚠️  Keep-alive ping échoué:', error.message);
            }
        }, 14 * 60 * 1000); // 14 minutes
    }
}

// Gestion des erreurs globales
process.on('uncaughtException', (err) => {
    console.error('❌ Erreur non capturée:', err);
    // En production, on ne quitte pas immédiatement
    if (process.env.NODE_ENV === 'production') {
        console.log('🔄 Tentative de récupération...');
    } else {
        process.exit(1);
    }
});

process.on('unhandledRejection', (err) => {
    console.error('❌ Promise rejetée:', err);
    if (process.env.NODE_ENV === 'production') {
        console.log('🔄 Tentative de récupération...');
    } else {
        process.exit(1);
    }
});

// Démarrage du serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
    console.log('='.repeat(60));
    console.log('🚀 SERVEUR TIS - VERSION PRODUCTION');
    console.log('='.repeat(60));
    console.log(`🌐 URL: http://0.0.0.0:${PORT}`);
    console.log(`🔐 Code du jour : ${generateDailyCode()}`);
    console.log(`📧 Email destinataire : ${RECIPIENT_EMAIL}`);
    console.log(`🏠 Environnement : ${process.env.NODE_ENV || 'development'}`);
    
    // Afficher l'heure actuelle au Maroc
    const casablancaTime = new Date().toLocaleString('fr-FR', {
        timeZone: 'Africa/Casablanca',
        weekday: 'long',
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    console.log(`🕐 Heure actuelle (Casablanca) : ${casablancaTime}`);
    console.log('='.repeat(60));
    
    // Test de la configuration email au démarrage
    transporter.verify((error, success) => {
        if (error) {
            console.log('❌ Configuration email invalide:', error.message);
            console.log('⚠️  Les fonctionnalités email ne seront pas disponibles');
        } else {
            console.log('✅ Configuration email valide');
            console.log('📅 Programmation des envois automatiques à 7h00...');
            
            // Programmer l'envoi quotidien à 7h00
            scheduleDaily7AMEmail();
        }
    });
    
    // Démarrer le keep-alive si en production
    if (process.env.NODE_ENV === 'production') {
        console.log('🏃 Démarrage du système keep-alive...');
        keepAlive();
    }
    
    console.log('✅ Serveur TIS démarré avec succès !');
    console.log('📚 Endpoints disponibles:');
    console.log('   GET  / - Informations du serveur');
    console.log('   GET  /health - Statut du serveur');
    console.log('   GET  /api/code - Code du jour');
    console.log('   GET  /test-email-config - Test config email');
    console.log('   POST /send-email - Envoyer email');
    console.log('   POST /send-daily-code - Envoyer code quotidien');
    console.log('='.repeat(60));
});