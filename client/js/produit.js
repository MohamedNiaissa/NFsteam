document.getElementById("panier").addEventListener("click", function ()
{
    if (window.confirm("Le produit a bien été rajouté, souhaiter vous allez voir votre panier ?"))
    {
        document.location.href="../html/panier.html";
    }
})