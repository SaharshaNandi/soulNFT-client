import React, { Dispatch, SetStateAction } from 'react'
import { AddItemTabButton } from '../../../types/AddItem';

type Props = {
  activeButton: AddItemTabButton,
  setActiveButton: Dispatch<SetStateAction<number>>,
}

const NextButton = (props: Props) => {
  const { activeButton, setActiveButton } = props;
  return (
    <button
      className={'mt-2 md:mt-4  rounded-lg button-pop-out hover:shadow-lg hover:bg-green-300 hover:text-green-700 font-bold border-4 border-white py-2 md:py-3 px-8 md:px-12 ' + activeButton.selectedStyle}
      onClick={() => setActiveButton(oldState => (oldState + 1)%3)}>
      Next
    </button>
  )
}

export default NextButton