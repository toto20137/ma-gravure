import { cart } from 'wix-stores-frontend';

$w.onReady(function () {
  const productSku = 'MUG_11OZ'; // SKU de ton template
  const productId = 'xxx'; // ID produit Wix
  
  $w('#htmlPersonalizer').src = `https://atelierdescreas.lovable.app/?sku=MUG_11OZ&mode=embed';
  
  $w('#htmlPersonalizer').onMessage((event) => {
    if (event.data.type === 'CUSTOMIZER_DONE') {
      // Ajouter au panier Wix avec le designId
      cart.addProducts([{
        productId: productId,
        quantity: 1,
        options: {
          customTextFields: [
            { title: 'Design ID', value: event.data.designId },
            { title: 'Personnalisation', value: event.data.summary.text }
          ]
        }
      }]).then(() => {
        // Rediriger vers le panier
        wixLocation.to('/cart');
      });
    }
  });
});
