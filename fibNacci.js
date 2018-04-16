// The Fibonacci sequence is a sequence where each number is the sum of its two predecessors. The sequence starts off like so: (0), 1, 1, 2, 3, 5, 8, etc. The 0 is in parenthesis because it helps the sequence get started but it is not actually part of the sequence.
// Using Closures (a closure is a function that is returned from another function) make the Fib function with the following specifications:

function fib() {

    // Set starting points of current and two prev items in Fibonacci sequence
    let fibSeq = 1;
    let fibPrev1 = 0;
    let fibPrev2 = 0;

    // Use inner function that logs current seq value and then advances seq and two prev seq values
    function nacci() {
        console.log(fibSeq);
        // increment seq and prev
        fibPrev2 = fibPrev1;
        fibPrev1 = fibSeq;
        fibSeq = fibPrev1 + fibPrev2;
    }
    //outer function returns inner function (closure)
    return nacci
  }

  var fibCounter = fib();
  fibCounter() // should console.log "1"
  fibCounter() // should console.log "1"
  fibCounter() // should console.log "2"
  fibCounter() // should console.log "3"
  fibCounter() // should console.log "5"
  fibCounter() // should console.log "8"
  