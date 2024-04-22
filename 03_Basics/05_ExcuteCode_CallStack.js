// -------------------- JS Excution Context --------------------
// -------------------- Video No.25 --------------------

// 01. Global Excution Context
// 02. Function Excution Context
// 03. Eval Excution Context (Objects of Global Excution)

function One() {
    console.log("One");
    Two()
}

function Two() {
    console.log("Two");
    Three()
}

function Three() {
    console.log("Three");
}

One()
Two()
Three()