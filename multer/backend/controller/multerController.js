export const multerController = async (req, res) => {
  if (!req.file) return res.status(400).json({ error: "No file uploaded" });

  // You can store file info to database here
  res.json({
    filePath: req.file.path,
    fileName: req.file.filename,
  });
};
