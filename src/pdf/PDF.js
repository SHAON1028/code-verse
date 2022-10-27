import React from "react";
import { Page, Text, Image, Document, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
});

const PDF = ({ singlecard }) => {
  const {
    title,
    short_dis,
    img,
    rating,
    price,
    author,
    updatedAt,
    description,
    includes,
    requirment
  } = singlecard;
  return (
    <Document>
      <Page style={styles.body}>
        <Text style={styles.header} fixed></Text>
        {/* <Image style={styles.image} src={LebronStretch} /> */}
        <Text style={styles.text}>{title}</Text>
        
        <Text style={styles.text}>{short_dis}</Text>
        <Text style={styles.text}>Description</Text>
        <Text style={styles.text}>{description}</Text>
        <Text style={styles.text}>Duration:{includes.hour}</Text>
        <Text style={styles.text}>Lessons:{includes.lessons}</Text>
        <Text style={styles.text}>Requirment</Text>
        <Text style={styles.text}>{requirment}</Text>
        

        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
        />
      </Page>
    </Document>
  );
};

export default PDF;
