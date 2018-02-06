export default class Definition {
  constructor(id, title, includedTerms, excludedTerms) {
    this.id = id;
    this.title = title;
    this.includedTerms = includedTerms;
    this.excludedTerms = excludedTerms;
  }
}
