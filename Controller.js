const tag = "[Controller]";

export default class Controller {
  constructor(store, { searchFormView, serchResultView }) {
    console.log(tag, "constructor");
    this.store = store;

    this.searchFormView = searchFormView;
    this.serchResultView = serchResultView;
    
    this.subscribeViewEvents();
  }

  subscribeViewEvents(){
    this.searchFormView
    .on("@submit", (event) => this.search(event.detail.value))
    .on("@reset", () => this.reset());

  }

  search(searchKeyword){
    console.log(tag, "search", searchKeyword);
    this.store.search(searchKeyword)
    this.render()
  }

  reset(){
    console.log(tag, "reset");
  }

  render(){
    if(this.store.searchKeyword.length > 0){
      this.searchResultView.show()
    }
  }


}
