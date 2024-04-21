//  ---------------- Video No. 24 ----------------
//  Immediately Invoked Function Expression (IIFE)

(function oneChai()
{
    // Named IIFE
    console.log(`Database Connection`);
})();

// After Declare one IIFE FN, Use ';' is Complesery

// Arrow Function
( (name) => 
{
    // Un-named IIFE
    console.log(`Second Database Connection of ${name}`);
})("Hasan Kabir");

// Parameterized IIFE FN, where pass parameter in last paranthis ()

// oneChai()