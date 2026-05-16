sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "com/acn/exercise4/model/formatter",
    "sap/ui/model/json/JSONModel"
], (Controller, formatter, JSONModel) => {
    "use strict";

    return Controller.extend("com.acn.exercise4.controller.JSONBinding", {

        formatter: formatter,

        onInit() {

            var oData = {
                Eid: "renz.l.bautista",
                Enabled: true,
                Address: {
                    Street: "Zone 8, Brgy. Sampaguita",
                    City: "Batangas",
                    Zip: "PH",
                    Country: "Philippines"
                },
                SalesAmount: 999999,
                CurrencyCode: "Php"
            };

            var oModel = new JSONModel(oData);
            this.getView().setModel(oModel);            
        },

    onSelectionChange: function (oEvent) {

        var oSelectedItem = oEvent.getParameter("listItem");
        var oContext = oSelectedItem.getBindingContext("ProductsModel");
        var oSelectedData = oContext.getObject();

        this.getView().setModel(
            new sap.ui.model.json.JSONModel(oSelectedData),
            "SelectedProduct"
        );

    }

    });
});