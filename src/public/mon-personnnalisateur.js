// Ce code définit ce que votre client voit
class Personalizer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div style="text-align:center;">
        <canvas id="canvas" width="300" height="300" style="border:1px solid #ccc"></canvas>
        <br>
        <input type="text" id="prenom" placeholder="Entrez le prénom ici" style="margin-top:10px;">
      </div>
    `;

    // On charge la bibliothèque de dessin
    const script = document.createElement('script');
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/fabric.js/5.3.1/fabric.min.js";
    script.onload = () => {
      const canvas = new fabric.Canvas('canvas');
      
      // Ajout du texte par défaut
      const text = new fabric.IText('Prénom', { left: 100, top: 100 });
      canvas.add(text);

      // Mise à jour en direct quand le client tape au clavier
      document.getElementById('prenom').addEventListener('input', (e) => {
        text.set('text', e.target.value);
        canvas.renderAll();
      });
    };
    document.head.appendChild(script);
  }
}
customElements.define('product-designer', Personalizer);