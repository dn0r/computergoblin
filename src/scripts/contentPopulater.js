var parent = document.getElementsByTagName('span')[0]

const pagesDir = '/'

const labReports = [
  { title: 'Lab 1 - Setup A Website', dir: (pagesDir + 'Lab1-01.26.23') },
]

console.log(labReports.length)
for (const n in labReports) {
let link = document.createElement('a')  
  link.href = labReports[n].dir
  link.innerText = labReports[n].title
  parent.appendChild(link)
}
