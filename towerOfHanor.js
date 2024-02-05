function towerOfHawoni(n,fromRod,toRod,usingRod)
{
    if(n ===1)
    {
        console.log(`move disk 1 from ${fromRod} to ${toRod}`)
        return 
    }
    towerOfHawoni(n-1,fromRod,usingRod,toRod)
    console.log(`move disk ${n} from ${fromRod} to ${toRod}`)
    towerOfHawoni(n-1,usingRod,toRod,fromRod)

}
towerOfHawoni(3,'A','C','B')