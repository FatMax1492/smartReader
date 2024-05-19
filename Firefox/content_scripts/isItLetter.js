function isItLetter(char) {

    /* Check if the char is in our range of letters

    Args:
        char: char to analyse

    Returns:
        bool: true if it's a letter

    */

    var letter = (char > 64 && char < 91) || (char > 96 && char < 123) 
                || (char > 185 && char < 187) || (char > 189 && char < 215)
				|| (char > 215 && char < 383) || (char > 461 && char < 469)
				|| (char > 476 && char < 478) || (char > 485 && char < 488)
				|| (char > 513 && char < 516) || (char > 521 && char < 524)
				|| (char > 533 && char < 540) || (char > 533 && char < 540);

    return letter;
}