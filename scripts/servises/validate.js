function fileValidate(file) {
  try {
    if (file.type === "text/csv" || file.type === "application/vnd.ms-excel") {
      return true
    }

    if (file.size > 10240) {
      return false
    }
  } catch (error) {
    console.log("Catch");
    if (error) return false
  }
}

module.exports = fileValidate;