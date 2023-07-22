function fileValidate(file) {
  console.log("▶ ⇛ file Validate:", file);
  try {
    if (file.type === "text/csv") {
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