import {Sorter}               from "./sorter";
import {numbercollection}     from "./numbercollection";
import {CharacterCollections} from "./CharacterCollections";
import {linklistCollection}   from "./linkListCollection";

const charColl = new CharacterCollections('striNFfgfgghuyiouo');
charColl.sort();

const numbersort = new numbercollection([100,3,5,-9]);
numbersort.sort();


const linklist = new linklistCollection();
linklist.add(5558856);
linklist.add(-5558856);
linklist.add(-8856);
linklist.add(15558856);
linklist.add(856);

linklist.print();
linklist.sort();