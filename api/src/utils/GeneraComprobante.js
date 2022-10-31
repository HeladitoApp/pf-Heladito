const PDFDocument = require('pdfkit-construct');
const Compras = require("../models/Compras");

async function GeneraComprobante(req,res) {
    const id_compras = req.query.compra_id

    const f = new Date()
    try {
        const compras = await Compras.findOne({_id:id_compras})
        console.log(compras)
        if (compras) {
            const doc = new PDFDocument({bufferPages:true});
            const filename = `Factura ${Date.now().pdf}`
            const stream =res.writeHead(200,{
                'Content-Type':'application/pdf',
                "Conten-disposition":`attachment;filename=${filename}`
            })
            doc.on('data',(data)=>{stream.write(data)})
            doc.on('end',()=>{stream.end()})
            const productos = []
            compras.productos.map((p)=>{
                productos.push(
                    {
                        'id':p._id,
                        'nombre':p.name,
                        'cantidad':p.quantity,
                        'precio': `$/ ${p.price}`
                    },
                )
            })
            doc.setDocumentHeader({
                height: '28',
                width: '100'
            },()=>{
                doc.lineJoin('miter')
                .rect(0, 0, doc.page.width, 100).fill("#ededed");
        
                doc.fill("#115dc8")
                    .fontSize(25)
                    .font('Times-Roman')
                    .text("Heladitos app", 55, 20);
        
                doc.fillColor('black')
                doc.fontSize(10)
                //row1
                doc.text('Nit de empresa: 11199927900',55,60)
                doc.text('Pais/Ciudad: N_PAIS/N_CIUDAD',200,60)
                doc.text(`Factura _NIT: ${compras._id}`,360,60)
        
                //row2          
                doc.text('Telefono: 3219023434',55,80)
                doc.text('Direccion: Av2 CR55 #13-104',220,80)
                doc.text(`Fechas ${f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear()}`,400,80)
            
                //Info de la facturacion
                doc.fontSize(12).text('FACTURAR POR',55,110)
                doc.fontSize(12).text('POR: Ventas de helados',400,110)
                doc.fontSize(10)
                doc.text(`Nombre: ${compras.usuario}`,55,130)
                doc.text(`Correo: ${compras.usuario}`,55,150)
                doc.text('Dirección: Calle 55 # 11-31',55,170)
                doc.text('Telefono: 31125663',55,190)

                //body
                doc.fontSize(15).text(`Total de la compra: $/ ${compras.sumaTotal}`,360,(productos.length * 50)+ 270)
        
            })
            doc.addTable(
                [
                    {key: 'id', label: 'Id producto', align: 'center'},
                    {key: 'nombre', label: 'Nombre', align: 'center'},
                    {key: 'cantidad', label: 'Cantidad', align: 'center'},
                    {key: 'precio', label: 'Precio',align: 'center'},
                ],
                productos, {
                    // border: null,
                    width: "fill_body",
                    striped: true,
                    stripedColors: ["#FDD9FF  ", "#FCC2FF  "],
                    cellsPadding: 10,
                    marginLeft: 45,
                    marginRight: 45,
                    headAlign: 'center'
                });

            doc.render();
            // doc.text('holaaa mundo con pdff kit',30,30)
            // doc.pipe(res)
            doc.end()
        }
    } catch (error) {
        res.send("No se encontro ninguna compra, verifique el id")
    }
    
}

module.exports = {
    GeneraComprobante,
};