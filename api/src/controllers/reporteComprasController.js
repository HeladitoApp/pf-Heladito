const { updateProducto } = require("../utils/putProductos");
const { ReporteCompras } = require("../utils/reportecompras");
const xl = require('excel4node');

async function reporteCompras(req, res) {
//   const info = req.body;
  try {
    const result = await ReporteCompras();
        // Create a new instance of a Workbook class
        var wb = new xl.Workbook();

        // Add Worksheets to the workbook
        var ws = wb.addWorksheet('Compras');

        // Create a reusable style
        var style = wb.createStyle({
        font: {
            size: 12,
        },
         alignment: {
            horizontal: 'centerContinuous',
            vertical: 'center'
         },
         border: {
            left: {
                style: 'thin', 
                color: 'black' 
            },
            right: {
                style: 'thin', 
                color: 'black' 
            },
            top: {
                style: 'thin', 
                color: 'black' 
            },
            bottom: {
                style: 'thin', 
                color: 'black' 
            },

         }
        });
        var styleTitulo = wb.createStyle({
            font: {
                bold: true
            },
             fill: {
                type: 'pattern',
                patternType: 'solid',
                bgColor: '#AAB7B8',
                fgColor: '#AAB7B8',
              }
            });
        ws.row(1).setHeight(30);
        ws.column(1).setWidth(30);
        ws.row(1).freeze()
        ws.row(1).filter();
        //Titulos
        const Titulos = ["Nº ORDEN","USUARIO","PRODUCTOS","FECHA DE COMPRA",'METODO PAGO','Estado','TOTAL DE COMPRA '] 
        let indexT = 1
        Titulos.map((titulo)=>{
            ws.cell(1, indexT)
            .string(titulo)
            .style(style)
            .style(styleTitulo);
            indexT ++
        })

        let index =2;
        result.map(c=>{ 
            ws.column(index).setWidth(30);
  
            ws.cell(index, 1)
            .string(c._id.toString())
            .style(style);
            
            ws.cell(index, 2)
            .string(c.usuario)
            .style(style);
            
            ws.cell(index, 3)
            .string('PRODUCTO 1')
            .style(style);

            ws.cell(index, 4)
            .date(c.createdAt)
            .style(style);

            ws.cell(index, 5)
            .string('Mercado Pago')
            .style(style);
            
            ws.cell(index, 6)
            .string('Pagado')
            .style(style);

            ws.cell(index, 7)
            .number(c.sumaTotal)
            .style(style);
            index ++
        })
        // res.json(result)
        wb.write('Reporte de compras.xlsx', res);
        

  } catch (error) {
    console.error({ message: error.message });
  }
}

module.exports = {
    reporteCompras,
};
