import axios from 'axios';
import { iRecivedMessage } from '../components/common/Message/RecivedMessage';

axios.defaults.withCredentials = true;
	
export class MessageDataProvider {

	public static createMessage(id: string, jwtToken: string, reciverId: string, text: string, advertId: string) {
		let status = 0;
		return axios.post(`http://localhost:4000/messages/create/`, {
			Text: text,
			UserReciverId: reciverId,
			AdvertId: advertId,
			UserSenderId: id,
		}, {
			headers: {
				'Authorization': 'Bearer ' + jwtToken,
				'Accept' : 'application/json',
				'Content-Type': 'application/json'
			}
		}).then(res => {
			status = res.status;
			return status;
		}).catch(error => {
			if (error.response) {
				console.log(error.response!.status);
				status = error.response!.status;
			}
			return status;
		});
	}
	
	public static getUserMessages(id: string, jwtToken: string) {
		let data = '';
		return axios.get(`http://localhost:4000/messages/reciver/` + id, {
			headers: {
				'Authorization': 'Bearer ' + jwtToken,
				'Accept' : 'application/json',
				'Content-Type': 'application/json'
			}
		}).then(res => {
			console.log(res);
			console.log(res.data);
			const messages: iRecivedMessage[] = [];
			res.data.$values.forEach((message: {
				advertId: string | undefined; advertTitle: any ;id: any; text: any, creationTime: any; userSenderId: any; userSenderName: any }) => {
				if (message.userSenderId != id) {
					const receivedMessage: iRecivedMessage = {
						advertId: message.advertId,
						advertTitle: message.advertTitle,
						senderUsername: message.userSenderName,
						senderId: message.userSenderId,
						messageId: message.id,
						message: message.text,
						date: message.creationTime,
					}
					messages.push(receivedMessage);
				}
			});
			return messages;
		}).catch(error => {
			if (error.response) {
				console.log(error.response!.status);
				data = error.response!.status;
			}
			return data;
		});
	}
}