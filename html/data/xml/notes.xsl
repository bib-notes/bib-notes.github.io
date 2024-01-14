<?xml version="1.0" encoding="UTF-8"?>

<!--
    Document   : notes.xsl
    Created on : January 14, 2024, 3:29 PM
    Author     : eVmPr
    Description:
        Purpose of transformation follows.
-->

<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="html"/>

    <!-- TODO customize transformation rules 
         syntax recommendation http://www.w3.org/TR/xslt 
    -->
    <xsl:template match="/">
        <html>
            <head>
                <title>notes.xsl</title>
                
            </head>
            <body>
                <h2><xsl:value-of select="heading" /></h2>
                <div id="msg" hidden=""><xsl:value-of select="content"/></div>
                <div id="output">   </div>
            </body>
        </html>
    </xsl:template>

</xsl:stylesheet>
