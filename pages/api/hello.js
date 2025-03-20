export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json({
      success: true,
      message: "Hello! This is a GET request.",
      data: { name: "John Doe" },
    });
  } else if (req.method === "POST") {
    const { name } = req.body;
    
    if (!name) {
      return res.status(400).json({
        success: false,
        message: "Missing 'name' in request body.",
      });
    }

    res.status(200).json({
      success: true,
      message: `Hello, ${name}! Your POST request was successful.`,
    });
  } else {
    res.status(405).json({
      success: false,
      message: "Method Not Allowed. Use GET or POST.",
    });
  }
}
