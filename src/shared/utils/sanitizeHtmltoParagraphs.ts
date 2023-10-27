function sanitizeHTMLtoParagraphs(html: string): string[] {
	const parser = new DOMParser();
	const doc = parser.parseFromString(html, 'text/html');

	return Array.from(doc.querySelectorAll('p')).map(p => p.textContent || '');
}