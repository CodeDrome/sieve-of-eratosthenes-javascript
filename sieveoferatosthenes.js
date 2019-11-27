
window.onload = function()
{
    writeToConsole("Sieve of Eratosthenes<br/><br/>", "console");

    const max = 100;
    let p = 2;

    prime_flags = initializePrimeFlags(max);

    writeToConsole("Initial state: all marked as prime<br/>", "console");

    outputAll(prime_flags, 10);

    writeToConsole("<br/>Running Sieve of Eratosthenes...<br/>", "console");

    while(p != -1)
    {
        markMultiples(prime_flags, p);

        p = findNextPrime(prime_flags, p);
    }

    writeToConsole("<br/>Composite numbers now identified<br/>", "console");

    outputAll(prime_flags, 10);

    writeToConsole("<br/>", "console");
};


function initializePrimeFlags(max)
{
    prime_flags = [];

    for(let i = 2; i <= max; i++)
    {
        prime_flags[i] = true;
    }

    return prime_flags;
}


function markMultiples(prime_flags, p)
{
    let multiplier = 2;
    let i = p * multiplier;
    let l = prime_flags.length;

    if(i <= l)
    {
        while(i <= l)
        {
            prime_flags[i] = false;

            multiplier++;

            i = p * multiplier;
        }
    }
}


function findNextPrime(prime_flags, current)
{
    let l = prime_flags.length;

    for(let i = current + 1; i <= l; i++)
    {
        if(prime_flags[i] == true)
        {
            return i;
        }
    }

    return -1;
}


function outputAll(prime_flags, columncount)
{
    let n;

    writeToConsole("<span class='greenbg'>PRIME</span> ", "console");
    writeToConsole("<span class='redbg'>COMPOSITE</span><br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;", "console");

    for(let i = 2, l = prime_flags.length; i < l; i++)
    {
        n = String(i).padStart(4, " ").replace(/ /g, "&nbsp;");

        if(prime_flags[i] == false)
        {
            writeToConsole(" <span class='redbg'>" + n + "</span>", "console");
        }
        else
        {
            writeToConsole(" <span class='greenbg'>" + n + "</span>", "console");
        }

        if(i % columncount == 0)
        {
            writeToConsole("<br/><br/>", "console");
        }
    }
}
