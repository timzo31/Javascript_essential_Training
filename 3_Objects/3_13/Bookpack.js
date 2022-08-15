class Bookpack {
  constructor(
    title,
    author,
    ISBN,
    nbPage,
    pubYear,
    currentPage,
    nbChapters,
    readStatus
  ) {
    this.title = title;
    this.author = author;
    this.nbPage = nbPage;
    this.pubYear = pubYear;
    this.nbChapters = nbChapters;
    this.ISBN = ISBN;
    this.currentPage = currentPage;
    this.readStatus = readStatus;
  }

  updateCurrentPage(newCurrentPage) {
    this.currentPage = newCurrentPage;
  }
  updateReadStatus(readStatus) {
    this.readStatus = newReadStatus;
  }
}
export default Bookpack;
