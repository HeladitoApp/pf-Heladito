import axios from "axios"
const FileDownload = require('js-file-download');
export const reporteCompras = (fechas) => (dispatch) => {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/reportes/compras?fechaInicial=${fechas.fechaInicio}&fechaFinal=${fechas.fechaFinal}`,
    {responseType: 'blob' })
        .then(res=>{FileDownload(res.data, `ReporteCompras ${fechas.fechaInicio}-${fechas.fechaFinal}.xlsx`)})
        .catch(e => console.log(e))
}
// FileDownload(res.data, 'ExcelCopy.xlsx')