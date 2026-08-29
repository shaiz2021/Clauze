"use client";

export const extractTextFromPdf = async (file: File): Promise<string> => {
  const pdfjsLib: any = await import("pdfjs-dist");
  
  // Set worker source
  if (typeof window !== "undefined" && !pdfjsLib.GlobalWorkerOptions.workerSrc) {
    pdfjsLib.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";
  }

  const arrayBuffer = await file.arrayBuffer();

  const toMessage = (err: unknown) => {
    if (err instanceof Error) return err.message;
    if (typeof err === "string") return err;
    if (err && typeof err === "object" && "message" in err) return String((err as any).message);
    return "";
  };

  const toName = (err: unknown) => {
    if (err && typeof err === "object" && "name" in err) return String((err as any).name);
    return "";
  };

  const toFriendlyError = (err: unknown) => {
    const name = toName(err);
    const message = toMessage(err);
    const msg = message.toLowerCase();

    if (name === "PasswordException" || msg.includes("password")) {
      return new Error("This PDF is password-protected. Please unlock it first, then upload again.");
    }

    if (name === "InvalidPDFException" || msg.includes("invalid pdf")) {
      return new Error("This file does not look like a valid PDF. Please re-export it or upload a different file.");
    }

    return err instanceof Error ? err : new Error("Unable to extract text from the PDF.");
  };

  const load = async () => {
    const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer });
    return await loadingTask.promise;
  };

  let pdf: any;
  try {
    pdf = await load();
  } catch (err) {
    throw toFriendlyError(err);
  }

  let fullText = "";

  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const textContent = await page.getTextContent({ normalizeWhitespace: true });
    const pageText = (textContent.items as any[])
      .map((item) => (typeof item?.str === "string" ? item.str : ""))
      .filter(Boolean)
      .join(" ")
      .replace(/\s+/g, " ")
      .trim();
    if (pageText) fullText += pageText + "\n\n";
  }

  const cleaned = fullText.trim();
  if (!cleaned) {
    throw new Error(
      "No selectable text found in this PDF. It may be a scanned image. Try uploading a text-based PDF or paste the text instead."
    );
  }

  return cleaned;
};
