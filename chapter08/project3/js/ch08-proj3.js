/* add code below this */
let companies = JSON.parse(content);
console.log(companies);


// Create a constructor function (see Section 8.8.6) named CompanyCard which
// will be passed a company object from the JSON data. Within the constuctor
// function, create properties named symbol, name, day50, day200, revenue,
// marketCap50, marketCap200, equity, and tags, whose values are extracted
// from the passed company object. 
 
function CompanyCard(company){
    this.symbol=company.symbol;
    this.name=company.companyName;
    this.day50=company.stats.day50MovingAvg;
    this.day200=company.stats.day200MovingAvg;
    this.revenue=company.stats.operatingRevenue;
    this.marketCap50=company.stats.week52High;
    this.marketCap200=company.stats.week52Low;
    this.equity=company.stats.totalAssets + (company.stats.totalLiabilities);
    this.tags=company.tags;
    this.currency = (num)=>{
        return (new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(num));
    }
    this.billions = (num) =>{
        let formatter = Intl.NumberFormat('en', { notation: 'compact' });
  
        return (formatter.format(num));
        
      
    }
    this.outputCard=()=>{
        tags = '';
        for(let tag of this.tags){
            tags+=`<small>${tag}</small> `;
        }
        document.write(`
            <article class="card">
            <h2>${this.symbol} - ${this.name}</h2>
            <div>
                <p>Share Price (50day avg): <span>${this.day50}</span></p>
                <p>Share Price (200day avg): <span>${this.day200}</span></p>
                <p>Market Cap (50day avg): <span>${this.billions(this.marketCap50)}</span></p>
                <p>Market Cap (200day avg): <span>${this.billions(this.marketCap200)}</span></p>
                <p>Net Revenue: <span>${this.billions(this.revenue)}</span></p>
                <p>Shareholder Equity: <span>${this.billions(this.equity)}</span></p>
            </div>
            <footer>` 
            + 
            tags 
            + 
               
            `</footer>
            </article>`
        )
    }
}



let outputCompanyCards = function(companies){
    for(let company of companies){
        let ccard = new CompanyCard(company);
        console.log(ccard.equity)
        ccard.outputCard();
    }
}

outputCompanyCards(companies);

let formatter = Intl.NumberFormat('en', { notation: 'compact' });
  
console.log(formatter.format(1e12));