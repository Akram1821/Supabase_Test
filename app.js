
document.addEventListener('DOMContentLoaded', () => {
    // Supabase configuration
    const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
    const SUPABASE_URL = 'https://qgzgeanmtwuxiaeplbqg.supabase.co';
    const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFnemdlYW5tdHd1eGlhZXBsYnFnIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxOTExMDM2NiwiZXhwIjoyMDM0Njg2MzY2fQ.gV8GTwMcOfio_gnTH1RvvT4_Re5pimUk_kiAzLqAf-Q';

// Wait for the DOM content to be loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Form submission handler
    const button = document.getElementById('btn');
    button.addEventListener('click', async (e) => {
        e.preventDefault();
        console.log('Button clicked');

        // Collect form data
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

        console.log({
            nom : nom,
            prénom : prénom,
            numéro_de_téléphone : numéro_de_téléphone,
            wilaya : wilaya,
            commune : commune,
            nom_de_produit : nom_de_produit,
            couleur : couleur,
            taille:taille,
            prix_de_produit:prix_de_produit,
            quantité:quantité,
            prix_total:prix_total
        });
