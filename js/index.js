var customer_BillingInfoJSON = {
  Name: 'XYZ Khan',
  ID: '2015-3-60-052',
  Roll: "10",
  Class: "Nine",
  Section: "A",
  Group: "Scince",
  CustomerPhno: '+018189457845',
};
let amount = {
  total: '1300000'
}

var invoiceJSON = {
  InvoiceNo: 'INV-120152',
  InvoiceDate: '03-12-2017',
  status: 'Unpaid',
}
var company_logo = {
  w: 500,
  h: 60
} //base64 image object

var fontSizes = {
  HeadTitleFontSize: 18,
  Head2TitleFontSize: 16,
  TitleFontSize: 14,
  SubTitleFontSize: 12,
  NormalFontSize: 10,
  SmallFontSize: 8
};

var lineSpacing = {
  NormalSpacing: 12,
};

function generate_InvoicePDF() {

  var doc = new jsPDF('p', 'pt');

  var rightStartCol1 = 400;
  var rightStartCol2 = 480;


  var InitialstartX = 40;
  var startX = 40;
  var InitialstartY = 50;
  var startY = 0;

  var lineHeights = 12;

  var res = doc.autoTableHtmlToJson(document.getElementById("basic-table"));
  res = doc.autoTableHtmlToJson(document.getElementById("tblInvoiceItemsList"));

  doc.setFontSize(fontSizes.SubTitleFontSize);
  doc.setFont('times');
  doc.setFontType('bold');

  doc.addImage(company_logo.src, 'PNG', startX - 20, startY += 35, company_logo.w + 40, company_logo.h + 10);

  doc.setFontType('normal');

  doc.setLineWidth(1);
  // doc.line(20, startY+lineSpacing.NormalSpacing, 580, startY+=lineSpacing.NormalSpacing);
  doc.line(20, startY + 30 + company_logo.h, 220, startY + 30 + company_logo.h);
  doc.line(380, startY + 30 + company_logo.h, 580, startY + 30 + company_logo.h);

  doc.setFontSize(fontSizes.Head2TitleFontSize);
  doc.setFontType('bold');
  doc.textAlign("MONEY RECEIPT", { align: "center" }, startX, startY += 35 + company_logo.h); //startY+=lineSpacing.NormalSpacing+2

  doc.setFontSize(fontSizes.NormalFontSize);
  doc.setFontType('bold');

  //-------student information---------------------
  var startBilling = startY;

  //doc.textAlign("Student Information,", {align: "left"}, startX, startY+=lineSpacing.NormalSpacing);

  doc.textAlign("Name : ", { align: "left" }, startX, startY += lineSpacing.NormalSpacing);
  doc.setFontType('normal');
  doc.textAlign(customer_BillingInfoJSON.Name, { align: "left" }, 80, startY);

  doc.setFontType('bold');
  doc.textAlign("ID No: ", { align: "left" }, startX, startY += lineSpacing.NormalSpacing);
  doc.setFontType('normal');
  doc.textAlign(customer_BillingInfoJSON.ID, { align: "left" }, 80, startY);

  doc.setFontType('bold');
  doc.textAlign("Roll: ", { align: "left" }, startX, startY += lineSpacing.NormalSpacing);
  doc.setFontType('normal');
  doc.textAlign(customer_BillingInfoJSON.Roll, { align: "left" }, 80, startY);


  doc.setFontType('bold');
  doc.textAlign("Class : ", { align: "left" }, startX, startY += lineSpacing.NormalSpacing);
  doc.setFontType('normal');
  doc.textAlign(customer_BillingInfoJSON.Class, { align: "left" }, 80, startY);

  doc.setFontType('bold');
  doc.textAlign("Section : ", { align: "left" }, startX, startY += lineSpacing.NormalSpacing);
  doc.setFontType('normal');
  doc.textAlign(customer_BillingInfoJSON.Section, { align: "left" }, 80, startY);

  doc.setFontType('bold');
  doc.textAlign("Group", { align: "left" }, startX, startY += lineSpacing.NormalSpacing);
  doc.setFontType('normal');
  doc.textAlign(customer_BillingInfoJSON.Group, { align: "left" }, 80, startY);

  doc.setFontType('bold');
  doc.textAlign("Phone: ", { align: "left" }, startX, startY += lineSpacing.NormalSpacing);
  doc.setFontType('normal');
  doc.textAlign(customer_BillingInfoJSON.CustomerPhno, { align: "left" }, 80, startY);



  //-------Student invoice information---------------------
  var rightcol1 = 440;
  var rightcol2 = 500;

  startY = startBilling;
  doc.setFontType('bold');
  doc.textAlign("Invoice No:", { align: "left" }, rightcol1, startY += lineSpacing.NormalSpacing);
  doc.setFontType('normal');
  doc.textAlign(invoiceJSON.InvoiceNo, { align: "left" }, rightcol2, startY);
  doc.setFontSize(fontSizes.NormalFontSize);
  doc.setFontType('bold');
  doc.textAlign("Date:", { align: "left" }, rightcol1, startY += lineSpacing.NormalSpacing);
  doc.setFontType('normal');
  // var w = doc.getStringUnitWidth('GSTIN') * NormalFontSize;
  doc.textAlign(invoiceJSON.InvoiceDate, { align: "left" }, rightcol2, startY);



  doc.setFontType('bold');
  doc.textAlign("Status:", { align: "left" }, rightcol1, startY += lineSpacing.NormalSpacing);
  doc.setFontType('normal');
  doc.textAlign(invoiceJSON.status, { align: "left" }, rightcol2, startY);

  var header = function (data) {
    doc.setFontSize(8);
    doc.setTextColor(40);
    doc.setFontStyle('normal');
  };
  // doc.autoTable(res.columns, res.data, {margin: {top:  startY+=30}});
  doc.setFontSize(8);
  doc.setFontStyle('normal');

  var options = {
    beforePageContent: header,
    margin: {
      top: 100
    },
    styles: {
      overflow: 'linebreak',
      fontSize: 10,
      rowHeight: 'auto',
      // columnWidth: 'wrap'
    },
    theme: 'plain',
    headerStyles: {
      // valign: 'middle',
      halign: 'center',
      lineWidth: 0.5,
      lineColor: [0, 0, 0]
    },
    bodyStyles: {
      lineWidth: 0.5,
      lineColor: [0, 0, 0],
      halign: 'left',
    },
    tableLineColor: [0, 0, 0],
    tableLineWidth: 1,
    columnStyles: {
      id: { columnWidth: 40 },
      fee: {
        halign: 'right',
      },
    },
    startY: startY += 60
  };

  var columns = [
    { title: "Sl#", dataKey: "id" },
    { title: "Fees", dataKey: "name" },
    { title: "Amount(BDT)", dataKey: "fee" },
  ];
  var people = [
    { id: 1, name: "Tuition Fee", fee: "1000" },
    { id: 2, name: "Lab Fee", fee: "100" },
    { id: 3, name: "Extra circuler Fees", fee: "200" },
    { id: 1, name: "Tuition Fee", fee: "1000" },
    { id: 2, name: "Lab Fee", fee: "100" },
    { id: 3, name: "Extra circuler Fees", fee: "200" },
  ];
  var column = [
    { title: "Sl#", dataKey: "id" },
    { title: "Sl#", dataKey: "name" },
    { title: "Sl#", dataKey: "total" }
  ];
  let amount = [
    { id: '', name: "TOTAL:", total: '1300' }
  ];

  doc.autoTable(columns, people, options);   //From dynamic data.
  startY = doc.autoTableEndPosY();
  doc.autoTable(column, amount, {
    startY: startY,
    theme: 'plain',
    columnStyles: {
      id: { columnWidth: 40 },
      name: {
        halign: 'left',
      },
      total: {
        halign: 'right',
      },
    },

    drawHeaderRow: function () {
      return false;
    }
  })



  //-------Invoice Footer---------------------
  var rightcol1 = 340;
  var rightcol2 = 430;

  startY = doc.autoTableEndPosY() + 30;

  doc.line(40, startY + 40, 220, startY + 40);
  doc.line(380, startY + 40, 560, startY + 40);

  doc.setFontSize(11);
  doc.textAlign('Deposit By', { align: "left" }, rightcol2, startY += lineSpacing.NormalSpacing + 50);
  doc.textAlign('Received By', { align: "left" }, startX + 50, startY);

  doc.save("invoice.pdf");
}


