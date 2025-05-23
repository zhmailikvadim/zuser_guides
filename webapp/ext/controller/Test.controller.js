sap.ui.define([

    "sap/m/MessageToast",
    "sap/ui/core/mvc/Controller",

    "sap/ui/model/json/JSONModel",
    "sap/m/PDFViewer"
], function (MessageToast, Controller, JSONModel) {
    'use strict';

    return {

        onInit: function () {

            this._sValidPath = sap.ui.require.toUrl("zuserguides/ext/controller/inf.pdf");
            //this._sInvalidPath = sap.ui.require.toUrl("https://sapbpc-dev.beloil.by/sap/opu/odata/sap/ZCV_ATTACHMENT_SRV_SRV/zfilemSet(%2700505691A5F21FD08AE25DA7D1C50436%27)/$value");

            var oModeltest = new JSONModel();
            oModeltest.setData({
                Source: this._sValidPath,
                Title: "My Custom Title",
                Height: "600px"
            });
            var sUsername = "o.tararenko";
            var sPassword = "Oksana33";
            var sAuthHeader = "Basic " + btoa(sUsername + ":" + sPassword);
          //  var test = this.getView().byId("idViewpdf");
            this.getView().byId("idViewpdf").setModel(oModeltest);
       
            
           // this.getView().byId("idViewpdf").addContent(oModeltest);
           // this.getView().byId("idPdfView1").setModel(oModeltest);


          /*  fetch("https://sapbpc-dev.beloil.by/sap/opu/odata/sap/ZCV_ATTACHMENT_SRV_SRV/zfilemSet(%2700505691A5F21FD08AE25DA7D1C50436%27)/$value", {
                method: "GET",
                headers: {
                    "Authorization": sAuthHeader
                }
            })
                .then(response => {
                    console.log(response)
                })
                .then(data => {
                    console.log(data)
                })

                .catch(error => {
                    console.error("Ошибка:", error)
                }
                );*/




        }



    };
});