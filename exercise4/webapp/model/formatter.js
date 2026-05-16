sap.ui.define([
    "sap/ui/model/type/Currency"
], function (Currency) {
    "use strict";

    return {

        formatStockValue: function (fUnitPrice, iStockLevel, sCurrCode) {

            if (!fUnitPrice || !iStockLevel) {
                return "";
            }

            var oCurrency = new Currency();

            return oCurrency.formatValue(
                [fUnitPrice * iStockLevel, sCurrCode],
                "string"
            );
        },

        formatMail: function (sEid, sDomain, sSubjectTemplate, sBody) {

            if (!sEid) {
                return "";
            }

            var sSubject = sSubjectTemplate.replace("{0}", sEid);

            return "mailto:" + sEid + sDomain +
                "?subject=" + encodeURIComponent(sSubject) +
                "&body=" + encodeURIComponent(sBody);
        }


    };
});