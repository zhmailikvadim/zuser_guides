sap.ui.define([

    "sap/m/MessageToast",
    "sap/ui/core/mvc/Controller",

    "sap/ui/model/json/JSONModel",
    "sap/m/PDFViewer"
], function (MessageToast, Controller, JSONModel) {
    'use strict';  

    return {

        onInit: function () {

            this.extensionAPI.attachPageDataLoaded(this.onDetailsLoaded, this);
 
            var url1 = "/sap/opu/odata/sap/ZCV_ATTACHMENT_SRV_SRV/zfilemSet(%27";
            var url2 = "%27)/$value";
            var oModeltest = new JSONModel();
            oModeltest.setData({
                Source: "",
                Title: "Просмотр файла",
                Height: "600px"
            });
 
            var urluuid = window.location.href;
            var searchWord = "uuid=guid";

            var index = urluuid.indexOf(searchWord);
            if (index != -1) {
                var indexstr = urluuid.substring(index, index+47);
                var splitstr = indexstr.split("'")
                if ( splitstr.length  > 0 ){
                    var surlnew = url1 + splitstr[1].toUpperCase().replace(/-/g, "") + url2;
                    this.getView().byId("idViewpdf").setModel(oModeltest);
                    this.getView().byId("idViewpdf").byId("_IDGenPDFViewer").setSource(surlnew);
                    }
              
            }
        },
    
          onBeforeRendering: function () {
            console.log('onBeforeRendering');
          },
       
          onAfterRendering: function () {
            //this.byId("listReportFilter-btnGo").firePress();
          //  initPdfViewer("3");
            console.log('onAfterRendering');
          },
       
          onValueHelpRequest: function (event) {
            var sPath = event.context.sPath; // has the context path
            var contextObj = event.context.getObject(); //contains the context Object and has all the properties bound in the list report Item
          },
       
          onDetailsLoaded: function (event, this1) {
           // MessageToast.show('');
            var sPath = event.context.sPath; // has the context path
       
            var contextObj = event.context.getObject(); //contains the context Object and has all the properties bound in the list report Item
           // initPdfViewer("2");
          }

    };
});