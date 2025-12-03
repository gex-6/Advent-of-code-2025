// https://adventofcode.com/2025/day/2

// lvl 1

function findInvalidIds1(input) {
  const ranges = parseInput(input);
  let sum = 0;

  for (const range of ranges) {
    for (let i = range[0]; i <= range[1]; i++) {
        if (hasRepeatedSequenceTwice(i)) {
            sum += i;
        }
    }
  }

  console.log(sum);
}

function hasRepeatedSequenceTwice(number) {
    const str = number.toString();
    
    // must be even length to have a repeated sequence
    if (str.length % 2 !== 0) {
      return false;
    }
    
    const mid = str.length / 2;
    const firstHalf = str.substring(0, mid);
    const secondHalf = str.substring(mid);
    
    return firstHalf === secondHalf;
  }

// lvl 2

function findInvalidIds2(input) {
    const ranges = parseInput(input);
    let sum = 0;
  
    for (const range of ranges) {
      for (let i = range[0]; i <= range[1]; i++) {
          if (hasRepeatedSequenceMany(i)) {
              sum += i;
          }
      }
    }
  
    console.log(sum);
}

function hasRepeatedSequenceMany(number) {
    const str = number.toString();
    
    for (let seqLength = 1; seqLength <= Math.floor(str.length / 2); seqLength++) {
      if (str.length % seqLength !== 0) {
        continue;
      }
      
      const sequence = str.substring(0, seqLength);
      const repetitions = str.length / seqLength;
      
      if (sequence.repeat(repetitions) === str) {
        return true;
      }
    }
    
    return false;
}

function parseInput(input) {
    const ranges = input.split(',').map(range => {
        return range.split('-').map(Number);
      });
      
    return ranges;
}

const inputExample = `11-22,95-115,998-1012,1188511880-1188511890,222220-222224,1698522-1698528,446443-446449,38593856-38593862,565653-565659,824824821-824824827,2121212118-2121212124`;
const input = `12077-25471,4343258-4520548,53-81,43661-93348,6077-11830,2121124544-2121279534,631383-666113,5204516-5270916,411268-591930,783-1147,7575717634-7575795422,8613757494-8613800013,4-19,573518173-573624458,134794-312366,18345305-18402485,109442-132958,59361146-59451093,1171-2793,736409-927243,27424-41933,93-216,22119318-22282041,2854-4778,318142-398442,9477235089-9477417488,679497-734823,28-49,968753-1053291,267179606-267355722,326-780,1533294120-1533349219`;

findInvalidIds2(input);