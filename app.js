
const { createClient } = window.supabase;

require('dotenv').config()
const SUPABASE_URL =  process.env.SUPABASE_URL;
const SUPABASE_KEY =process.env.SUPABASE_KEY;
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
document.addEventListener('DOMContentLoaded', () => {
    // Form submission handler
    const button = document.getElementById('btn');
    button.addEventListener('click', async (e) => {
        e.preventDefault();
        const nom = document.getElementById('nom').value;
        const prénom = document.getElementById('prénom').value;
        const numéro_de_téléphone = document.getElementById('numéro_de_téléphone').value;
        const wilaya = document.getElementById('wilaya').value;
        const commune = document.getElementById('commune').value;
        const quantité = parseInt(document.getElementById('quantité').value);

        const nom_de_produit = document.getElementById('product-name').innerText;
        const couleur = document.getElementById('product-color').innerText;
        const taille = document.getElementById('product-size').innerText;
        const prix_de_produit = parseFloat(document.getElementById('product-price').innerText);
        const prix_total = prix_de_produit * quantité;
        const { data, error } = await supabase
            .from('Orders')
            .insert([
                {
                    nom,
                    prénom,
                    numéro_de_téléphone,
                    wilaya,
                    commune,
                    nom_de_produit,
                    couleur,
                    taille,
                    prix_de_produit,
                    quantité,
                    prix_total
                }
            ]);
        if (error) {
            console.error('Erreur lors de l\'insertion des données :', error);
        } else {
            console.log('Commande passée avec succès :', data);
            alert('Commande passée avec succès !');
            document.getElementById('order-form').reset();
        }
    });
});
