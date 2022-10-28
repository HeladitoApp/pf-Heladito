async function anuncioHtml(anuncio) {
  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html
    xmlns="http://www.w3.org/1999/xhtml"
    xmlns:o="urn:schemas-microsoft-com:office:office"
    style="
      width: 100%;
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
      padding: 0;
      margin: 0;
    "
  >
    <head>
      <meta charset="UTF-8" />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="x-apple-disable-message-reformatting" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta content="telephone=no" name="format-detection" />
      <title>Nuevo mensaje</title>
      <!--[if (mso 16)]>
        <style type="text/css">
          a {
            text-decoration: none;
          }
        </style>
      <![endif]-->
      <!--[if gte mso 9
        ]><style>
          sup {
            font-size: 100% !important;
          }
        </style><!
      [endif]-->
      <!--[if gte mso 9]>
        <xml>
          <o:OfficeDocumentSettings>
            <o:AllowPNG></o:AllowPNG>
            <o:PixelsPerInch>96</o:PixelsPerInch>
          </o:OfficeDocumentSettings>
        </xml>
      <![endif]-->
      <!--[if !mso]><!-- -->
      <link
        href="https://fonts.googleapis.com/css?family=Lato:400,400i,700,700i"
        rel="stylesheet"
      />
      <!--<![endif]-->
      <style type="text/css">
        #outlook a {
          padding: 0;
        }
        .ExternalClass {
          width: 100%;
        }
        .ExternalClass,
        .ExternalClass p,
        .ExternalClass span,
        .ExternalClass font,
        .ExternalClass td,
        .ExternalClass div {
          line-height: 100%;
        }
        .es-button {
          mso-style-priority: 100 !important;
          text-decoration: none !important;
        }
        a[x-apple-data-detectors] {
          color: inherit !important;
          text-decoration: none !important;
          font-size: inherit !important;
          font-family: inherit !important;
          font-weight: inherit !important;
          line-height: inherit !important;
        }
        .es-desk-hidden {
          display: none;
          float: left;
          overflow: hidden;
          width: 0;
          max-height: 0;
          line-height: 0;
          mso-hide: all;
        }
        [data-ogsb] .es-button {
          border-width: 0 !important;
          padding: 15px 25px 15px 25px !important;
        }
        @media only screen and (max-width: 600px) {
          p,
          ul li,
          ol li,
          a {
            line-height: 150% !important;
          }
          h1,
          h2,
          h3,
          h1 a,
          h2 a,
          h3 a {
            line-height: 120% !important;
          }
          h1 {
            font-size: 30px !important;
            text-align: center;
          }
          h2 {
            font-size: 26px !important;
            text-align: center;
          }
          h3 {
            font-size: 20px !important;
            text-align: center;
          }
          .es-header-body h1 a,
          .es-content-body h1 a,
          .es-footer-body h1 a {
            font-size: 30px !important;
          }
          .es-header-body h2 a,
          .es-content-body h2 a,
          .es-footer-body h2 a {
            font-size: 26px !important;
          }
          .es-header-body h3 a,
          .es-content-body h3 a,
          .es-footer-body h3 a {
            font-size: 20px !important;
          }
          .es-menu td a {
            font-size: 16px !important;
          }
          .es-header-body p,
          .es-header-body ul li,
          .es-header-body ol li,
          .es-header-body a {
            font-size: 16px !important;
          }
          .es-content-body p,
          .es-content-body ul li,
          .es-content-body ol li,
          .es-content-body a {
            font-size: 16px !important;
          }
          .es-footer-body p,
          .es-footer-body ul li,
          .es-footer-body ol li,
          .es-footer-body a {
            font-size: 16px !important;
          }
          .es-infoblock p,
          .es-infoblock ul li,
          .es-infoblock ol li,
          .es-infoblock a {
            font-size: 12px !important;
          }
          *[class="gmail-fix"] {
            display: none !important;
          }
          .es-m-txt-c,
          .es-m-txt-c h1,
          .es-m-txt-c h2,
          .es-m-txt-c h3 {
            text-align: center !important;
          }
          .es-m-txt-r,
          .es-m-txt-r h1,
          .es-m-txt-r h2,
          .es-m-txt-r h3 {
            text-align: right !important;
          }
          .es-m-txt-l,
          .es-m-txt-l h1,
          .es-m-txt-l h2,
          .es-m-txt-l h3 {
            text-align: left !important;
          }
          .es-m-txt-r img,
          .es-m-txt-c img,
          .es-m-txt-l img {
            display: inline !important;
          }
          .es-button-border {
            display: block !important;
          }
          a.es-button,
          button.es-button {
            font-size: 20px !important;
            display: block !important;
            border-width: 15px 25px 15px 25px !important;
          }
          .es-btn-fw {
            border-width: 10px 0px !important;
            text-align: center !important;
          }
          .es-adaptive table,
          .es-btn-fw,
          .es-btn-fw-brdr,
          .es-left,
          .es-right {
            width: 100% !important;
          }
          .es-content table,
          .es-header table,
          .es-footer table,
          .es-content,
          .es-footer,
          .es-header {
            width: 100% !important;
            max-width: 600px !important;
          }
          .es-adapt-td {
            display: block !important;
            width: 100% !important;
          }
          .adapt-img {
            width: 100% !important;
            height: auto !important;
          }
          .es-m-p0 {
            padding: 0px !important;
          }
          .es-m-p0r {
            padding-right: 0px !important;
          }
          .es-m-p0l {
            padding-left: 0px !important;
          }
          .es-m-p0t {
            padding-top: 0px !important;
          }
          .es-m-p0b {
            padding-bottom: 0 !important;
          }
          .es-m-p20b {
            padding-bottom: 20px !important;
          }
          .es-mobile-hidden,
          .es-hidden {
            display: none !important;
          }
          tr.es-desk-hidden,
          td.es-desk-hidden,
          table.es-desk-hidden {
            width: auto !important;
            overflow: visible !important;
            float: none !important;
            max-height: inherit !important;
            line-height: inherit !important;
          }
          tr.es-desk-hidden {
            display: table-row !important;
          }
          table.es-desk-hidden {
            display: table !important;
          }
          td.es-desk-menu-hidden {
            display: table-cell !important;
          }
          .es-menu td {
            width: 1% !important;
          }
          table.es-table-not-adapt,
          .esd-block-html table {
            width: auto !important;
          }
          table.es-social {
            display: inline-block !important;
          }
          table.es-social td {
            display: inline-block !important;
          }
          .es-desk-hidden {
            display: table-row !important;
            width: auto !important;
            overflow: visible !important;
            max-height: inherit !important;
          }
        }
      </style>
    </head>
    <body
      style="
        width: 100%;
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
        font-family: lato, 'helvetica neue', helvetica, arial, sans-serif;
        padding: 0;
        margin: 0;
      "
    >
      <div class="es-wrapper-color" style="background-color: #f4f4f4">
        <!--[if gte mso 9]>
          <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
            <v:fill type="tile" color="#f4f4f4"></v:fill>
          </v:background>
        <![endif]-->
        <table
          class="es-wrapper"
          width="100%"
          cellspacing="0"
          cellpadding="0"
          style="
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
            border-collapse: collapse;
            border-spacing: 0px;
            padding: 0;
            margin: 0;
            width: 100%;
            height: 100%;
            background-repeat: repeat;
            background-position: center top;
            background-color: #f4f4f4;
          "
        >
          <tr class="gmail-fix" height="0" style="border-collapse: collapse">
            <td style="padding: 0; margin: 0">
              <table
                cellspacing="0"
                cellpadding="0"
                border="0"
                align="center"
                style="
                  mso-table-lspace: 0pt;
                  mso-table-rspace: 0pt;
                  border-collapse: collapse;
                  border-spacing: 0px;
                  width: 600px;
                "
              >
                <tr style="border-collapse: collapse">
                  <td
                    cellpadding="0"
                    cellspacing="0"
                    border="0"
                    style="
                      padding: 0;
                      margin: 0;
                      line-height: 1px;
                      min-width: 600px;
                    "
                    height="0"
                  >
                    <img
                      src="https://zejoiy.stripocdn.email/content/guids/CABINET_837dc1d79e3a5eca5eb1609bfe9fd374/images/41521605538834349.png"
                      style="
                        display: block;
                        border: 0;
                        outline: none;
                        text-decoration: none;
                        -ms-interpolation-mode: bicubic;
                        max-height: 0px;
                        min-height: 0px;
                        min-width: 600px;
                        width: 600px;
                      "
                      alt
                      width="600"
                      height="1"
                    />
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr style="border-collapse: collapse">
            <td valign="top" style="padding: 0; margin: 0">
              <table
                cellpadding="0"
                cellspacing="0"
                class="es-content"
                align="center"
                style="
                  mso-table-lspace: 0pt;
                  mso-table-rspace: 0pt;
                  border-collapse: collapse;
                  border-spacing: 0px;
                  table-layout: fixed !important;
                  width: 100%;
                "
              >
                <tr style="border-collapse: collapse">
                  <td
                    align="center"
                    bgcolor="#ffe6c1"
                    style="padding: 0; margin: 0; background-color: #ffe6c1"
                  >
                    <table
                      class="es-content-body"
                      style="
                        mso-table-lspace: 0pt;
                        mso-table-rspace: 0pt;
                        border-collapse: collapse;
                        border-spacing: 0px;
                        background-color: transparent;
                        width: 600px;
                      "
                      cellspacing="0"
                      cellpadding="0"
                      align="center"
                    >
                      <tr style="border-collapse: collapse">
                        <td
                          align="left"
                          style="
                            margin: 0;
                            padding-left: 10px;
                            padding-right: 10px;
                            padding-top: 15px;
                            padding-bottom: 15px;
                          "
                        >
                          <!--[if mso]><table style="width:580px" cellpadding="0" cellspacing="0"><tr><td style="width:282px" valign="top"><![endif]-->
                          <table
                            class="es-left"
                            cellspacing="0"
                            cellpadding="0"
                            align="left"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              border-collapse: collapse;
                              border-spacing: 0px;
                              float: left;
                            "
                          >
                            <tr style="border-collapse: collapse">
                              <td
                                align="left"
                                style="padding: 0; margin: 0; width: 282px"
                              >
                                <table
                                  width="100%"
                                  cellspacing="0"
                                  cellpadding="0"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    border-collapse: collapse;
                                    border-spacing: 0px;
                                  "
                                >
                                  <tr style="border-collapse: collapse">
                                    <td
                                      class="es-infoblock es-m-txt-c"
                                      align="left"
                                      style="
                                        padding: 0;
                                        margin: 0;
                                        line-height: 14px;
                                        font-size: 12px;
                                        color: #cccccc;
                                      "
                                    >
                                      <p
                                        style="
                                          margin: 0;
                                          -webkit-text-size-adjust: none;
                                          -ms-text-size-adjust: none;
                                          mso-line-height-rule: exactly;
                                          font-family: arial, 'helvetica neue',
                                            helvetica, sans-serif;
                                          line-height: 14px;
                                          color: #a9a9a9;
                                          font-size: 12px;
                                        "
                                      >
                                        <strong>©HeladitosApp.&nbsp;</strong>Todos
                                        los derechos reservados.
                                      </p>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                          <!--[if mso]></td><td style="width:20px"></td><td style="width:278px" valign="top"><![endif]-->
                          <table
                            class="es-right"
                            cellspacing="0"
                            cellpadding="0"
                            align="right"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              border-collapse: collapse;
                              border-spacing: 0px;
                              float: right;
                            "
                          >
                            <tr style="border-collapse: collapse">
                              <td
                                align="left"
                                style="padding: 0; margin: 0; width: 278px"
                              >
                                <table
                                  width="100%"
                                  cellspacing="0"
                                  cellpadding="0"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    border-collapse: collapse;
                                    border-spacing: 0px;
                                  "
                                >
                                  <tr style="border-collapse: collapse">
                                    <td
                                      align="right"
                                      class="es-infoblock es-m-txt-c"
                                      style="
                                        padding: 0;
                                        margin: 0;
                                        line-height: 14px;
                                        font-size: 12px;
                                        color: #cccccc;
                                      "
                                    >
                                      <p
                                        style="
                                          margin: 0;
                                          -webkit-text-size-adjust: none;
                                          -ms-text-size-adjust: none;
                                          mso-line-height-rule: exactly;
                                          font-family: lato, 'helvetica neue',
                                            helvetica, arial, sans-serif;
                                          line-height: 14px;
                                          color: #a9a9a9;
                                          font-size: 12px;
                                        "
                                      >
                                        <u
                                          ><strong
                                            ><a
                                              href="https://heladitos-app.vercel.app/"
                                              class="view"
                                              target="_blank"
                                              style="
                                                -webkit-text-size-adjust: none;
                                                -ms-text-size-adjust: none;
                                                mso-line-height-rule: exactly;
                                                text-decoration: underline;
                                                color: #a9a9a9;
                                                font-size: 12px;
                                                font-family: arial,
                                                  'helvetica neue', helvetica,
                                                  sans-serif;
                                              "
                                              >HeladitosApp</a
                                            ></strong
                                          ></u
                                        >
                                      </p>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                          <!--[if mso]></td></tr></table><![endif]-->
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              <table
                class="es-header"
                cellspacing="0"
                cellpadding="0"
                align="center"
                style="
                  mso-table-lspace: 0pt;
                  mso-table-rspace: 0pt;
                  border-collapse: collapse;
                  border-spacing: 0px;
                  table-layout: fixed !important;
                  width: 100%;
                  background-color: #ffa73b;
                  background-repeat: repeat;
                  background-position: center top;
                "
              >
                <tr style="border-collapse: collapse">
                  <td
                    align="center"
                    bgcolor="#c2f4f6"
                    style="padding: 0; margin: 0; background-color: #c2f4f6"
                  >
                    <table
                      class="es-header-body"
                      cellspacing="0"
                      cellpadding="0"
                      align="center"
                      style="
                        mso-table-lspace: 0pt;
                        mso-table-rspace: 0pt;
                        border-collapse: collapse;
                        border-spacing: 0px;
                        background-color: transparent;
                        width: 600px;
                      "
                    >
                      <tr style="border-collapse: collapse">
                        <td
                          align="left"
                          bgcolor="#ffc6e9"
                          style="
                            margin: 0;
                            padding-bottom: 10px;
                            padding-left: 10px;
                            padding-right: 10px;
                            padding-top: 20px;
                            background-color: #ffc6e9;
                          "
                        >
                          <table
                            width="100%"
                            cellspacing="0"
                            cellpadding="0"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              border-collapse: collapse;
                              border-spacing: 0px;
                            "
                          >
                            <tr style="border-collapse: collapse">
                              <td
                                valign="top"
                                align="center"
                                style="padding: 0; margin: 0; width: 580px"
                              >
                                <table
                                  width="100%"
                                  cellspacing="0"
                                  cellpadding="0"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    border-collapse: collapse;
                                    border-spacing: 0px;
                                  "
                                >
                                  <tr style="border-collapse: collapse">
                                    <td
                                      align="center"
                                      style="
                                        padding: 0;
                                        margin: 0;
                                        font-size: 0px;
                                      "
                                    >
                                      <a
                                        href="https://heladitos-app.vercel.app/"
                                        target="_blank"
                                        style="
                                          -webkit-text-size-adjust: none;
                                          -ms-text-size-adjust: none;
                                          mso-line-height-rule: exactly;
                                          text-decoration: underline;
                                          color: #111111;
                                          font-size: 14px;
                                        "
                                        ><img
                                          src="https://zejoiy.stripocdn.email/content/guids/CABINET_a4d18941863a322c12318fbd18ac83cf/images/logotipo_tienda_helados.png"
                                          alt
                                          style="
                                            display: block;
                                            border: 0;
                                            outline: none;
                                            text-decoration: none;
                                            -ms-interpolation-mode: bicubic;
                                          "
                                          width="80"
                                      /></a>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              <table
                class="es-content"
                cellspacing="0"
                cellpadding="0"
                align="center"
                style="
                  mso-table-lspace: 0pt;
                  mso-table-rspace: 0pt;
                  border-collapse: collapse;
                  border-spacing: 0px;
                  table-layout: fixed !important;
                  width: 100%;
                "
              >
                <tr style="border-collapse: collapse">
                  <td
                    style="padding: 0; margin: 0; background-color: #c2f4f6"
                    bgcolor="#c2f4f6"
                    align="center"
                  >
                    <table
                      class="es-content-body"
                      style="
                        mso-table-lspace: 0pt;
                        mso-table-rspace: 0pt;
                        border-collapse: collapse;
                        border-spacing: 0px;
                        background-color: transparent;
                        width: 600px;
                      "
                      cellspacing="0"
                      cellpadding="0"
                      align="center"
                    >
                      <tr style="border-collapse: collapse">
                        <td align="left" style="padding: 0; margin: 0">
                          <table
                            width="100%"
                            cellspacing="0"
                            cellpadding="0"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              border-collapse: collapse;
                              border-spacing: 0px;
                            "
                          >
                            <tr style="border-collapse: collapse">
                              <td
                                valign="top"
                                align="center"
                                style="padding: 0; margin: 0; width: 600px"
                              >
                                <table
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    border-collapse: separate;
                                    border-spacing: 0px;
                                    background-color: #ffffff;
                                    border-radius: 4px;
                                  "
                                  width="100%"
                                  cellspacing="0"
                                  cellpadding="0"
                                  bgcolor="#ffffff"
                                  role="presentation"
                                >
                                  <tbody class="ui-droppable-hover">
                                    <tr style="border-collapse: collapse">
                                      <td
                                        align="center"
                                        style="
                                          margin: 0;
                                          padding-left: 30px;
                                          padding-right: 30px;
                                          padding-top: 35px;
                                          padding-bottom: 35px;
                                        "
                                      >
                                        <h1
                                          style="
                                            margin: 0;
                                            line-height: 58px;
                                            mso-line-height-rule: exactly;
                                            font-family: lato, 'helvetica neue',
                                              helvetica, arial, sans-serif;
                                            font-size: 48px;
                                            font-style: normal;
                                            font-weight: normal;
                                            color: #111111;
                                          "
                                        >
                                          ${anuncio.titulo}
                                        </h1>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              <table
                class="es-content"
                cellspacing="0"
                cellpadding="0"
                align="center"
                style="
                  mso-table-lspace: 0pt;
                  mso-table-rspace: 0pt;
                  border-collapse: collapse;
                  border-spacing: 0px;
                  table-layout: fixed !important;
                  width: 100%;
                "
              >
                <tr style="border-collapse: collapse">
                  <td
                    align="center"
                    bgcolor="#fff7ea"
                    style="padding: 0; margin: 0; background-color: #fff7ea"
                  >
                    <table
                      class="es-content-body"
                      style="
                        mso-table-lspace: 0pt;
                        mso-table-rspace: 0pt;
                        border-collapse: collapse;
                        border-spacing: 0px;
                        background-color: #fff7ea;
                        width: 600px;
                      "
                      cellspacing="0"
                      cellpadding="0"
                      align="center"
                      bgcolor="#FFF7EA"
                    >
                      <tr style="border-collapse: collapse">
                        <td align="left" style="padding: 0; margin: 0">
                          <table
                            width="100%"
                            cellspacing="0"
                            cellpadding="0"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              border-collapse: collapse;
                              border-spacing: 0px;
                            "
                          >
                            <tr style="border-collapse: collapse">
                              <td
                                valign="top"
                                align="center"
                                style="padding: 0; margin: 0; width: 600px"
                              >
                                <table
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    border-collapse: separate;
                                    border-spacing: 0px;
                                    border-radius: 4px;
                                    background-color: #ffffff;
                                  "
                                  width="100%"
                                  cellspacing="0"
                                  cellpadding="0"
                                  bgcolor="#ffffff"
                                  role="presentation"
                                >
                                  <tr style="border-collapse: collapse">
                                    <td
                                      class="es-m-txt-l"
                                      bgcolor="#ffffff"
                                      align="center"
                                      style="
                                        padding: 0;
                                        margin: 0;
                                        padding-top: 20px;
                                        padding-left: 30px;
                                        padding-right: 30px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin: 0;
                                          -webkit-text-size-adjust: none;
                                          -ms-text-size-adjust: none;
                                          mso-line-height-rule: exactly;
                                          font-family: lato, 'helvetica neue',
                                            helvetica, arial, sans-serif;
                                          line-height: 29px;
                                          color: #666666;
                                          font-size: 19px;
                                        "
                                      >
                                        ¡Te presentamos ${anuncio.name}!
                                      </p>
                                    </td>
                                  </tr>
                                  <tr style="border-collapse: collapse">
                                    <td
                                      class="es-m-txt-l"
                                      bgcolor="#ffffff"
                                      align="left"
                                      style="
                                        margin: 0;
                                        padding-top: 20px;
                                        padding-bottom: 20px;
                                        padding-left: 30px;
                                        padding-right: 30px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin: 0;
                                          -webkit-text-size-adjust: none;
                                          -ms-text-size-adjust: none;
                                          mso-line-height-rule: exactly;
                                          font-family: lato, 'helvetica neue',
                                            helvetica, arial, sans-serif;
                                          line-height: 27px;
                                          color: #666666;
                                          font-size: 18px;
                                        "
                                      >
                                        ${anuncio.info}
                                      </p>
                                    </td>
                                  </tr>
                                  <tr style="border-collapse: collapse">
                                    <td
                                      align="center"
                                      style="
                                        padding: 0;
                                        margin: 0;
                                        font-size: 0px;
                                      "
                                    >
                                      <a
                                        target="_blank"
                                        href="https://heladitos-app.vercel.app/"
                                        style="
                                          -webkit-text-size-adjust: none;
                                          -ms-text-size-adjust: none;
                                          mso-line-height-rule: exactly;
                                          text-decoration: underline;
                                          color: #ffa73b;
                                          font-size: 18px;
                                        "
                                        ><img
                                          class="adapt-img"
                                          src=${anuncio.img}
                                          alt="Consulta nuestros productos"
                                          style="
                                            display: block;
                                            border: 0;
                                            outline: none;
                                            text-decoration: none;
                                            -ms-interpolation-mode: bicubic;
                                          "
                                          width="600"
                                          title="Consulta nuestros productos"
                                      /></a>
                                    </td>
                                  </tr>
                                  <tr style="border-collapse: collapse">
                                    <td
                                      class="es-m-txt-l"
                                      align="left"
                                      style="
                                        padding: 0;
                                        margin: 0;
                                        padding-top: 20px;
                                        padding-left: 30px;
                                        padding-right: 30px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin: 0;
                                          -webkit-text-size-adjust: none;
                                          -ms-text-size-adjust: none;
                                          mso-line-height-rule: exactly;
                                          font-family: lato, 'helvetica neue',
                                            helvetica, arial, sans-serif;
                                          line-height: 27px;
                                          color: #666666;
                                          font-size: 18px;
                                        "
                                      >
                                        Esperamos que sigas disfrutando&nbsp;mucho
                                        de nuestros productos.
                                      </p>
                                    </td>
                                  </tr>
                                  <tr style="border-collapse: collapse">
                                    <td
                                      class="es-m-txt-l"
                                      align="left"
                                      style="
                                        margin: 0;
                                        padding-top: 20px;
                                        padding-left: 30px;
                                        padding-right: 30px;
                                        padding-bottom: 40px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin: 0;
                                          -webkit-text-size-adjust: none;
                                          -ms-text-size-adjust: none;
                                          mso-line-height-rule: exactly;
                                          font-family: lato, 'helvetica neue',
                                            helvetica, arial, sans-serif;
                                          line-height: 27px;
                                          color: #666666;
                                          font-size: 18px;
                                        "
                                      >
                                        Muchas gracias. Saludos 👋<br /><strong
                                          >Heladitos App Team 🍦</strong
                                        >
                                      </p>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              <table
                class="es-content"
                cellspacing="0"
                cellpadding="0"
                align="center"
                style="
                  mso-table-lspace: 0pt;
                  mso-table-rspace: 0pt;
                  border-collapse: collapse;
                  border-spacing: 0px;
                  table-layout: fixed !important;
                  width: 100%;
                "
              >
                <tr style="border-collapse: collapse">
                  <td
                    align="center"
                    bgcolor="#c2f4f6"
                    style="padding: 0; margin: 0; background-color: #c2f4f6"
                  >
                    <table
                      class="es-content-body"
                      style="
                        mso-table-lspace: 0pt;
                        mso-table-rspace: 0pt;
                        border-collapse: collapse;
                        border-spacing: 0px;
                        background-color: transparent;
                        width: 600px;
                      "
                      cellspacing="0"
                      cellpadding="0"
                      align="center"
                    >
                      <tr style="border-collapse: collapse">
                        <td
                          align="left"
                          bgcolor="#ffc6e9"
                          style="
                            padding: 0;
                            margin: 0;
                            padding-left: 20px;
                            padding-right: 20px;
                            background-color: #ffc6e9;
                          "
                        >
                          <table
                            width="100%"
                            cellspacing="0"
                            cellpadding="0"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              border-collapse: collapse;
                              border-spacing: 0px;
                            "
                          >
                            <tr style="border-collapse: collapse">
                              <td
                                valign="top"
                                align="center"
                                style="padding: 0; margin: 0; width: 560px"
                              >
                                <table
                                  width="100%"
                                  cellspacing="0"
                                  cellpadding="0"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    border-collapse: collapse;
                                    border-spacing: 0px;
                                  "
                                >
                                  <tr style="border-collapse: collapse">
                                    <td
                                      class="es-infoblock made_with"
                                      align="center"
                                      style="
                                        padding: 5px;
                                        margin: 0;
                                        line-height: 0px;
                                        font-size: 0px;
                                        color: #cccccc;
                                      "
                                    >
                                      <a
                                        target="_blank"
                                        href="https://heladitos-app.vercel.app/"
                                        style="
                                          -webkit-text-size-adjust: none;
                                          -ms-text-size-adjust: none;
                                          mso-line-height-rule: exactly;
                                          text-decoration: underline;
                                          color: #cccccc;
                                          font-size: 12px;
                                        "
                                        ><img
                                          src="https://zejoiy.stripocdn.email/content/guids/CABINET_a4d18941863a322c12318fbd18ac83cf/images/picsart_1021063731.jpg"
                                          alt=""
                                          width="550"
                                          style="
                                            display: block;
                                            border: 0;
                                            outline: none;
                                            text-decoration: none;
                                            -ms-interpolation-mode: bicubic;
                                          "
                                          class="adapt-img"
                                          title=""
                                      /></a>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              <table
                cellpadding="0"
                cellspacing="0"
                class="es-content"
                align="center"
                style="
                  mso-table-lspace: 0pt;
                  mso-table-rspace: 0pt;
                  border-collapse: collapse;
                  border-spacing: 0px;
                  table-layout: fixed !important;
                  width: 100%;
                "
              >
                <tr style="border-collapse: collapse">
                  <td
                    align="center"
                    bgcolor="#ffe6c1"
                    style="padding: 0; margin: 0; background-color: #ffe6c1"
                  >
                    <table
                      class="es-content-body"
                      style="
                        mso-table-lspace: 0pt;
                        mso-table-rspace: 0pt;
                        border-collapse: collapse;
                        border-spacing: 0px;
                        background-color: transparent;
                        width: 600px;
                      "
                      cellspacing="0"
                      cellpadding="0"
                      align="center"
                    >
                      <tr style="border-collapse: collapse">
                        <td
                          align="left"
                          style="
                            margin: 0;
                            padding-left: 10px;
                            padding-right: 10px;
                            padding-top: 15px;
                            padding-bottom: 15px;
                          "
                        >
                          <!--[if mso]><table style="width:580px" cellpadding="0" cellspacing="0"><tr><td style="width:282px" valign="top"><![endif]-->
                          <table
                            class="es-left"
                            cellspacing="0"
                            cellpadding="0"
                            align="left"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              border-collapse: collapse;
                              border-spacing: 0px;
                              float: left;
                            "
                          >
                            <tr style="border-collapse: collapse">
                              <td
                                align="left"
                                style="padding: 0; margin: 0; width: 282px"
                              >
                                <table
                                  width="100%"
                                  cellspacing="0"
                                  cellpadding="0"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    border-collapse: collapse;
                                    border-spacing: 0px;
                                  "
                                >
                                  <tr style="border-collapse: collapse">
                                    <td
                                      class="es-infoblock es-m-txt-c"
                                      align="left"
                                      style="
                                        padding: 0;
                                        margin: 0;
                                        line-height: 14px;
                                        font-size: 12px;
                                        color: #cccccc;
                                      "
                                    >
                                      <p
                                        style="
                                          margin: 0;
                                          -webkit-text-size-adjust: none;
                                          -ms-text-size-adjust: none;
                                          mso-line-height-rule: exactly;
                                          font-family: arial, 'helvetica neue',
                                            helvetica, sans-serif;
                                          line-height: 14px;
                                          color: #a9a9a9;
                                          font-size: 12px;
                                        "
                                      >
                                        <strong>©HeladitosApp.&nbsp;</strong>Todos
                                        los derechos reservados.
                                      </p>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                          <!--[if mso]></td><td style="width:20px"></td><td style="width:278px" valign="top"><![endif]-->
                          <table
                            class="es-right"
                            cellspacing="0"
                            cellpadding="0"
                            align="right"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              border-collapse: collapse;
                              border-spacing: 0px;
                              float: right;
                            "
                          >
                            <tr style="border-collapse: collapse">
                              <td
                                align="left"
                                style="padding: 0; margin: 0; width: 278px"
                              >
                                <table
                                  width="100%"
                                  cellspacing="0"
                                  cellpadding="0"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    border-collapse: collapse;
                                    border-spacing: 0px;
                                  "
                                >
                                  <tr style="border-collapse: collapse">
                                    <td
                                      align="right"
                                      class="es-infoblock es-m-txt-c"
                                      style="
                                        padding: 0;
                                        margin: 0;
                                        line-height: 14px;
                                        font-size: 12px;
                                        color: #cccccc;
                                      "
                                    >
                                      <p
                                        style="
                                          margin: 0;
                                          -webkit-text-size-adjust: none;
                                          -ms-text-size-adjust: none;
                                          mso-line-height-rule: exactly;
                                          font-family: lato, 'helvetica neue',
                                            helvetica, arial, sans-serif;
                                          line-height: 14px;
                                          color: #a9a9a9;
                                          font-size: 12px;
                                        "
                                      >
                                        <u
                                          ><strong
                                            ><a
                                              href="https://heladitos-app.vercel.app/"
                                              class="view"
                                              target="_blank"
                                              style="
                                                -webkit-text-size-adjust: none;
                                                -ms-text-size-adjust: none;
                                                mso-line-height-rule: exactly;
                                                text-decoration: underline;
                                                color: #a9a9a9;
                                                font-size: 12px;
                                                font-family: arial,
                                                  'helvetica neue', helvetica,
                                                  sans-serif;
                                              "
                                              >HeladitosApp</a
                                            ></strong
                                          ></u
                                        >
                                      </p>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                          <!--[if mso]></td></tr></table><![endif]-->
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </div>
    </body>
  </html>
  ;`;
}

/* 
${anuncio.titulo} ---> h1
${anuncio.name} ---> p
${anuncio.info} ---> p
${anuncio.img} ---> src (url)
*/

module.exports = {
  anuncioHtml,
};
