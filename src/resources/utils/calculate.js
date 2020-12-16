import OPERATION from '@/resources/constants/OPERATION';
import add from '@/resources/utils/add';
import subtract from '@/resources/utils/subtract';
import multiply from '@/resources/utils/multiply';
import divide from '@/resources/utils/divide';

function calculate(a, b, operation) {
  let method;
  switch (operation) {
    case OPERATION.ADD: {
      method = add;
      break;
    }
    case OPERATION.SUBTRACT: {
      method = subtract;
      break;
    }
    case OPERATION.MULTIPLY: {
      method = multiply;
      break;
    }
    case OPERATION.DIVIDE: {
      method = divide;
      break;
    }
    default:
  }
  return method(a, b);
}

export default calculate;
