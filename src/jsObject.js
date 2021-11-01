var menuVar =
    {
        "menu": {
            "id": "file",
            "value": "File",
            "popup": {
                "menuitem": [
                    {"value": "New", "onclick": "CreateNewDoc()"},
                    {"value": "Open", "onclick": "OpenDoc()"},
                    {"value": "Close", "onclick": "CloseDoc()"}
                ]
            }
        }
    };

console.log(menuVar.menu.popup.menuitem[1].value);

console.log(JSON.stringify(Object.keys(menuVar.menu)));
