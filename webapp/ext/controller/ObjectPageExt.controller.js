sap.ui.define([

    "sap/m/MessageToast",
    "sap/ui/core/mvc/Controller",

    "sap/ui/model/json/JSONModel",
    "sap/m/PDFViewer"
], function (MessageToast, Controller, JSONModel) {
    'use strict';  

    return {

        onInit: function () {

           

            this._sValidPath = sap.ui.require.toUrl("https://sapbpc-dev.beloil.by/sap/opu/odata/sap/ZCV_ATTACHMENT_SRV_SRV/zfilemSet(%2700505691A5F21FD08AE25DA7D1C50436%27)/$value");
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
            //var test = this.getView().byId("idViewpdf");
            this.getView().byId("idViewpdf").setModel(oModeltest);
           // this.getView().byId("idViewpdf").byId("_IDGenPDFViewer").setSource("https://sapbpc-dev.beloil.by/sap/opu/odata/sap/ZCV_ATTACHMENT_SRV_SRV/zfilemSet(%2700505691A5F21FD08AE25DA7D1C50436%27)/$value")


         


            fetch("https://sapbpc-dev.beloil.by/sap/opu/odata/sap/ZCV_ATTACHMENT_SRV_SRV/zfilemSet(%2700505691A5F21FD08AE25DA7D1C50436%27)/$value", {
                method: "GET",
                headers: {
                    "Authorization": sAuthHeader
                }
            })
                .then(response => response.blob())
                .then(blob => {
                    const url = URL.createObjectURL(blob);

                    var reader = new FileReader();
                    reader.readAsDataURL(blob);
                    reader.onloadend = function () {
                    var base64data = reader.result;
                   
                   this.byId("idViewpdf").byId("_IDGenPDFViewer").setSource(base64data);
                   

                  

                   // this.getView().byId("idViewpdf").setModel(oModeltest1);
                    //this.getView().byId("idViewpdf").byId("_IDGenPDFViewer").setSource(base64data)
                       // pdfViewer.setSource(base64data);
                     }.bind(this);
                      
                   
                   

                  //this.getView().byId("idViewpdf").setModel(oModeltest1);
             //     this.getView().byId("idViewpdf").byId("_IDGenPDFViewer").setSource(url)
                  
                 
                })

                .catch(error => {
                    console.error("Ошибка:", error)
                }
                );

        },
        base64toBlob: function (base64, contentType = 'application/pdf') {
            const byteCharacters = atob(base64);
            const byteNumbers = new Array(byteCharacters.length);
            for (let i = 0; i < byteCharacters.length; i++) {
              byteNumbers[i] = byteCharacters.charCodeAt(i);
            }
            const byteArray = new Uint8Array(byteNumbers);
            return new Blob([byteArray], { type: contentType });
          }




    };
});