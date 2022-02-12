import { backEndlookup } from "../lookup";

export function apiBooksLookup(callback){
    backEndlookup("GET","/books/",callback)
}

export function apiAddtocartLookup(bookid,action,callback){
    // {"action":"Add","id":}
        const data={action:action,id:bookid}
        backEndlookup("POST","/books/cart/",callback,data)
}

export function apicartLookup(callback){
    backEndlookup("GET","/books/cart/",callback)
}

export function apiCartBuyLookup(books,callback){
    let bookarray=[]
    // console.log(books," Books")
    books.forEach(element => {
        bookarray.push({"id":element})
    });
    console.log(bookarray," BooksArray")
    const data={"action":"Buy","detail":bookarray}
    backEndlookup("POST","/books/cart/",callback,data)
}

export function apiBookDetailLookup(bookname,callback){
    backEndlookup("GET",`/books/${bookname}/`,callback)
}

export function apiBookDetailBuyLookup(bookname,callback){
    const data={"action":"Buy"}
    backEndlookup("POST",`/books/${bookname}/`,callback,data)
}

export function apiOwnedBooksLookup(callback){
    backEndlookup("GET","/books/owned/",callback)
}

export function apiReturnBooksLookup(orderid,callback){
    // {"action":"Return","detail":[{"orderid": 69},{"orderid": 69}]}
    const data={action:"Return",detail:[{orderid:orderid}]}
    // console.log(data,"Data")
    backEndlookup("POST","/books/owned/",callback,data)
}

export function apiOrderedBooksLookup(callback){
    backEndlookup("GET","/books/ordered/",callback)
}

export function apiSearchLookup(query,callback){
    backEndlookup("GET",`/books/?query=${query}`,callback)
}