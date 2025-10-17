# Configuration reCAPTCHA pour le formulaire de devis

## 📦 Installation des dépendances

```bash
npm install react-google-recaptcha @types/react-google-recaptcha
```

## 🔧 Configuration Google reCAPTCHA

### 1. Créer un site reCAPTCHA

1. Aller sur [Google reCAPTCHA Console](https://www.google.com/recaptcha/admin)
2. Cliquer sur "+" pour créer un nouveau site
3. Remplir les informations :
    - **Label** : Digital Innovation - Site Vitrine Pro
    - **Type** : reCAPTCHA v2 ("Je ne suis pas un robot")
    - **Domaines** :
        - `localhost` (pour le développement)
        - `digitalinnovation.bj` (pour la production)
        - `www.digitalinnovation.bj` (si nécessaire)

### 2. Obtenir les clés

Après création, vous obtiendrez :

-   **Site Key** (clé publique) - à utiliser côté client
-   **Secret Key** (clé privée) - à garder secrète

### 3. Variables d'environnement

Ajouter dans votre fichier `.env.local` :

```env
# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=devis_site_vitrine
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_emailjs_public_key

# reCAPTCHA Configuration
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_recaptcha_site_key
```

## 🛡️ Fonctionnalités de sécurité ajoutées

### ✅ Validation côté client

-   Le bouton "Envoyer" est désactivé tant que reCAPTCHA n'est pas validé
-   Message d'erreur si l'utilisateur essaie d'envoyer sans valider reCAPTCHA

### ✅ Reset automatique

-   reCAPTCHA se remet à zéro après chaque envoi (succès ou erreur)
-   Évite la réutilisation des tokens

### ✅ Gestion d'erreurs

-   Reset du reCAPTCHA en cas d'erreur d'envoi
-   Messages d'erreur clairs pour l'utilisateur

### ✅ Thème sombre

-   reCAPTCHA configuré en thème sombre pour s'harmoniser avec le design

## 📧 Template EmailJS mis à jour

Le template EmailJS inclut maintenant le token reCAPTCHA :

```html
<div class="field">
    <div class="field-label">🛡️ Token reCAPTCHA</div>
    <div class="field-value">{{recaptcha_token}}</div>
</div>
```

## 🔍 Vérification côté serveur (optionnel)

Pour une sécurité maximale, vous pouvez vérifier le token reCAPTCHA côté serveur :

```javascript
// Exemple de vérification côté serveur
const verifyRecaptcha = async (token) => {
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    const response = await fetch(
        "https://www.google.com/recaptcha/api/siteverify",
        {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: `secret=${secretKey}&response=${token}`,
        }
    );
    const data = await response.json();
    return data.success;
};
```

## 🚀 Déploiement

1. Installer les dépendances : `npm install react-google-recaptcha @types/react-google-recaptcha`
2. Configurer les variables d'environnement
3. Tester le formulaire en local
4. Déployer avec les bonnes variables d'environnement

## 📝 Notes importantes

-   Le reCAPTCHA fonctionne uniquement avec HTTPS en production
-   Les clés sont différentes entre développement et production
-   Le token reCAPTCHA expire après 2 minutes
-   Un token ne peut être utilisé qu'une seule fois
