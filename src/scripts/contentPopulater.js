import dataset from "../data/dataset.json" assert { type: "json" };

const labReports = dataset.labReports;

var parent = document.getElementsByTagName("span")[0];

for (var n in labReports) {
  let link = document.createElement("a");
  link.href = labReports[n].dir;
  link.innerText = labReports[n].title;
  parent.appendChild(link);
}
