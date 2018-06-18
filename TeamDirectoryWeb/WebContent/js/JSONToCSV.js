function jsonToCSV(json){

    var fields = {"User-ID", "Name", "Alter", "Sternzeichen", "Studiengang", "Email"};
    var replacer = function(key, value) { return value === null ? '' : value }
    var csv = json.map(function(row){
      return fields.map(function(fieldName){
        return JSON.stringify(row[fieldName], replacer)
      }).join(',')
    })
    csv.unshift(fields.join(',')) // add header column

    console.log(csv.join('\r\n'));

    return csv;
}
