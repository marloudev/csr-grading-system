import React from "react";
import {
    Page,
    Text,
    View,
    Document,
    StyleSheet,
    PDFViewer,
    Image,
} from "@react-pdf/renderer";
import moment from "moment";

const styles = StyleSheet.create({
    page: {
        padding: 20,
        fontFamily: "Helvetica",
    },
    section: {
        borderBottomWidth: 1,
        borderBottomColor: "#000",
        marginBottom: 10,
    },
    title: {
        fontSize: 18,
        marginBottom: 10,
        textAlign: "center",
        fontWeight: "bold",
    },
    text: {
        fontSize: 12,
        marginBottom: 5,
    },
    header: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottomWidth: 2,
        borderBottomColor: "#ddd",
        paddingBottom: 10,
        marginBottom: 10,
    },
    image: {
        width: 80,
        height: 80,
        padding: 10,
    },
    profileInfo: {
        textAlign: "center",
    },
    table: {
        display: "table",
        width: "100%",
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#000",
        marginBottom: 10,
    },
    tableRow: {
        flexDirection: "row",
    },
    tableColHeader: {
        width: "33.33%",
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#000",
        backgroundColor: "#eee",
        padding: 5,
        fontWeight: "bold",
        textAlign: "center",
    },
    tableCol: {
        width: "33.33%",
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#000",
        padding: 5,
        textAlign: "center",
    },
    footer: {
        position: "absolute",
        bottom: 50,
        left: 0,
        right: 0,
        textAlign: "center",
        fontSize: 10,
        // borderTopWidth: 1,
        // borderTopColor: "#000",
        paddingTop: 5,
    },
});

export default function PDFDataSection({ data }) {
    console.log("datadatadata", data);
    return (
        <PDFViewer style={{ width: "100%", height: "100vh" }}>
            <Document>
                <Page size="Legal" style={styles.page}>
                    <View>
                        <View style={styles.profileInfo}>
                            <Text style={styles.title}>
                                Colegio de Santa Rita de San Carlos INC.
                            </Text>
                        </View>
                        <View style={{ borderBottom: 2, padding: 2 }}></View>
                        <Text
                            style={{
                                textAlign: "center",
                                marginTop: 12,
                                fontWeight: "bold",
                            }}
                        >
                            {data.semester}
                        </Text>
                        <View
                            style={{
                                marginTop: "10px",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                                gap: "1rem",
                                marginLeft: "20px",
                                marginRight: "20px",
                            }}
                        >
                            <Text
                                style={{
                                    textAlign: "center",
                                    marginTop: 12,
                                    fontWeight: "bold",
                                }}
                            >
                                {data?.user?.fname} {data?.user?.mname}{" "}
                                {data?.user?.lname}
                            </Text>
                            <Text
                                style={{
                                    textAlign: "center",
                                    marginTop: 12,
                                    fontWeight: "bold",
                                }}
                            >
                                {data.academic_year}
                            </Text>
                        </View>
                        <View style={{ marginTop: "50px" }}></View>
                        {data.user.subjects.map((res, index) => (
                            <View
                                key={index}
                                style={{
                                    marginTop: "6px",
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    marginLeft: "20px",
                                    marginRight: "20px",
                                }}
                            >
                                <Text>{res.name}</Text>
                                <Text></Text>
                            </View>
                        ))}
                    </View>
                    <View style={styles.footer}>
                        <View
                            style={{
                                marginTop: "10px",
                                display: "flex",
                                flexDirection: "row", // Ensures items are in a row (default)
                                alignItems: "center",
                                justifyContent: "space-evenly",
                                gap: "1rem",
                            }}
                        >
                          <Text style={{paddingTop:2,borderTop:2}}>
                            &nbsp;&nbsp;&nbsp;
                            Teacher's Name & Signature
                            &nbsp;&nbsp;&nbsp;
                            </Text>
                          <Text  style={{paddingTop:2,borderTop:2}}>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          Dean
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </Text>
                        </View>
                    </View>
                </Page>
            </Document>
        </PDFViewer>
    );
}
