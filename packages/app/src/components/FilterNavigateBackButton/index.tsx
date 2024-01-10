import React from 'react';
import CloseIcon from '../../assets/svg/close.svg';
import Button from '../Button';
import Icon from '../Icon';
import { Props } from './types';

const NavigateBackButton: React.FC<Props> = ({ onPress }): React.JSX.Element => {
	return (
		<Button
			className="absolute w-12 h-12 rounded-full top-6 left-6 bg-accent-200"
			onPress={onPress}
		>
			<Icon Icon={CloseIcon} className="scale-90" />
		</Button>
	);
};

export default NavigateBackButton;