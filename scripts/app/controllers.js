angular.module('langingPages')
	.controller('MainController', [
		'$scope', '$timeout', 'propType', function ($scope, $timeout, propType) {

			$scope.timestamp = new Date().getTime();
			//#region подготовка страницы
			$scope.propFields = {
				title: 'квартиры',
				word: 'вашей квартирe',
				'class': 'flat',
				radios: ['rent', 'wood'],
				img1: 'img/flat1.png',
				img2: 'img/flat2.png',
				chosenProp: 'flat',
				showChoice: false

			}
			if (propType) {
				switch (propType) {
				case 'house':
					$scope.propFields = {
						title: 'дома',
						word: 'вашем доме',
						'class': 'house',
						radios: ['habitation', 'material', 'rent', 'fire'],
						img1: 'img/house1.png',
						img2: 'img/house2.png',
						chosenProp: 'house',
						showChoice: false
					}
					break;
					case 'dacha':
						$scope.propFields = {
							title: 'дачи',
							word: 'вашей даче',
							'class': 'dacha',
							radios: ['habitation', 'material', 'rent', 'fire'],
							img1: 'img/dacha1.png',
							img2: 'img/dacha2.png',
							chosenProp: 'house',
							showChoice: false
						}
						break;
					case 'bathhouse':
						$scope.propFields = {
							title: 'бани',
							word: 'вашей бане',
							'class': 'bathhouse',
							radios: ['habitation', 'material', 'rent', 'fire'],
							img1: 'img/bath1.png',
							img2: 'img/bath2.png',
							chosenProp: 'house',
							showChoice: false
						}
						break;
					case 'garazh':
						$scope.propFields = {
							title: 'гаража',
							word: 'вашем гараже',
							'class': 'garazh',
							radios: ['habitation', 'material', 'rent', 'fire'],
							img1: 'img/garazh1.png',
							img2: 'img/garazh2.png',
							chosenProp: 'house',
							showChoice: false
						}
						break;
					case 'property':
						$scope.propFields = {
							title: 'имущества',
							word: 'вашем имуществе',
							'class': 'property',
							radios: ['habitation', 'material', 'rent', 'fire', 'wood'],
							img1: 'img/property1.png',
							img2: 'img/property2.png',
							chosenProp: false,
							showChoice: true
						}
						break;
					case 'zhilyo':
						$scope.propFields = {
							title: 'жилья',
							word: 'вашем жилье',
							'class': 'zhilyo',
							radios: ['habitation', 'material', 'rent', 'fire', 'wood'],
							img1: 'img/zhilyo1.png',
							img2: 'img/zhilyo2.png',
							chosenProp: false,
							showChoice: true
						}
						break;
					case 'zhil-pom':
						$scope.propFields = {
							title: 'жилых помещений',
							word: 'вашем помещении',
							'class': 'zhil-pom',
							radios: ['habitation', 'material', 'rent', 'fire', 'wood'],
							img1: 'img/zhil-pom1.png',
							img2: 'img/zhil-pom2.png',
							chosenProp: false,
							showChoice: true
						}
						break;
				}
			}
			$scope.radioEntry=function(value) {
				return $scope.propFields.radios.indexOf(value) > -1;
			}
			$scope.choosePropType = function (value) {
				if (value==='flat') {
					$scope.propFields.radios = ['rent', 'wood'];
					$scope.propFields.chosenProp = value;
				}
				else if (value === 'house') {
					$scope.propFields.radios = ['habitation', 'material', 'rent', 'fire'];
					$scope.propFields.chosenProp = value;
					
				}
			}
			//#endregion

			$scope.disablePolicy = false;
			$scope.totalPolicyPrice = 639;
			$scope.showCallbackUp = false;

			$scope.buyStep = 'landing';

			$scope.priceSlider = {
				value: 3000000,
				minValue: 300000,
				maxValue: 10000000,
				stepValue: 10000,
				refreshCounter: 0
			}

			$scope.priceSliderHouse = {
				value: 1000000,
				minValue: 300000,
				maxValue: 3000000,
				stepValue: 10000,
				refreshCounter: 0
			}
			$scope.innerPrices = {
				construct: 1240000,
				finish: 496000,
				equipment: 496000,
				property: 248000
			}
			$scope.radios = {
				wood: 'no',
				rent: 'no',
				habitation: 'permanent',
				material: 'woodbrick',
				fire: 'no'
			};

			$scope.totalSumPeriod = 'monthly';
			$scope.propertyCity = '';
		$scope.propertyCityChosen = 'Москва';
			

			//дисаблить кнопку "оформить" и обновлять суммы
			var disablePolicyStab = function(val) {
				var nv = val || Math.floor(Math.random() * (1000000 - 200 + 1)) + 200;
				$scope.disablePolicy = true;

				var enablePolicy = function() {
					$scope.totalPolicyPrice = Math.floor(Math.random() * (10000 - 200 + 1)) + 200;
					$scope.innerPrices.construct = (Math.floor(nv * 0.5)).toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ');
					$scope.innerPrices.finish = (Math.floor(nv * 0.2)).toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ');
					$scope.innerPrices.equipment = (Math.floor(nv * 0.2)).toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ');
					$scope.innerPrices.property = (Math.floor(nv * 0.1)).toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ');
					$scope.disablePolicy = false;
				}
				$timeout(enablePolicy, 500);

			}

			$scope.$watch('priceSlider.value', function(newValue, oldValue) {
				if (newValue !== oldValue) {
					var nv = parseInt(newValue, 10);
					disablePolicyStab(nv);
				}
			});
			$scope.$watch('priceSliderHouse.value', function (newValue, oldValue) {
				if (newValue !== oldValue) {
					var nv = parseInt(newValue, 10);
					disablePolicyStab(nv);
				}
			});
			$scope.$watch('radios.wood', function(newValue, oldValue) {
				if (newValue !== oldValue) {
					disablePolicyStab();
				}
			});
			$scope.$watch('radios.fire', function(newValue, oldValue) {
				if (newValue !== oldValue) {
					disablePolicyStab();
				}
			});
			$scope.$watch('radios.rent', function(newValue, oldValue) {
				if (newValue !== oldValue) {
					disablePolicyStab();
				}
			});
			$scope.$watch('radios.habitation', function(newValue, oldValue) {
				if (newValue !== oldValue) {
					disablePolicyStab();
				}
			});
			$scope.$watch('radios.material', function(newValue, oldValue) {
				if (newValue !== oldValue) {
					disablePolicyStab();
				}
			});
			$scope.$watch('totalSumPeriod', function (newValue, oldValue) {
			if (newValue !== oldValue) {
				disablePolicyStab();
			}
		});





			$scope.insuredPerson = [];
			$scope.changeBuyStep = function(step) {
				if (step === 'insurer' && $scope.totalPolicyPrice > 0) {
					$scope.buyStep = step;

				} else if (step === 'landing') {
					$scope.buyStep = step;
				}

			}

			//#region Страхователь
			$scope.latinNamePattern = /^[A-Z][a-z]+$/;
			$scope.onlyNumbersPattern = /^\d+$/;
			$scope.passportPattern = /^\d{2}\s\d{2}\s\d{6}$/;
			$scope.phonePattern = /^\+7\s\(\d{3}\)\s\d{3}\-\d{2}\-\d{2}$/;
			$scope.emailPattern = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w{2,}([-.]\w+)*$/;

			$scope.today = new Date();
			$scope.today.setHours(0, 0, 0, 0);
			var day = $scope.today.getDate();
			var week = new Date((new Date()).setDate(day + 7));
			week.setHours(0, 0, 0, 0);
			var month = new Date((new Date()).setDate(day + 30));
			month.setHours(0, 0, 0, 0);
			var year = $scope.today.getFullYear();
			var yearAdult = year - 18;
			var yearAdultMax = year - 74;
			var eighteen = new Date((new Date()).setFullYear(yearAdult));
			eighteen.setHours(0, 0, 0, 0);
			var seventyFour = new Date((new Date()).setFullYear(yearAdultMax));
			seventyFour.setHours(0, 0, 0, 0);
			var lastYear = new Date((new Date()).setFullYear(year - 1));
			var minDateIssue = new Date((new Date()).setFullYear(year - 60));
			minDateIssue.setHours(0, 0, 0, 0);


			$scope.genders = [
				{ key: 'male', name: 'Gender', value: 'Мужчина', title: 'Мужчина' },
				{ key: 'female', name: 'Gender', value: 'Женщина', title: 'Женщина' }
			];
			$scope.insurer = {
				startInsureDpOpened: false,
				startInsureDateMin: week,
				startInsureDateMax: month,
				startInsureDate: '',
				birthdayDpOpened: false,
				birthdayMin: seventyFour,
				birthdayMax: eighteen,
				birthday: '',
				dateIssueDpOpened: false,
				dateIssueMin: minDateIssue,
				dateIssueMax: $scope.today,
				dateIssue: '',
				phone: '',
				email: '',
				firstname: '',
				lastname: '',
				patronymic: '',
				gender: 'Мужчина',
				passportNumber: '',
				passportIssued: '',
				sameAddress: false,
				samePropAddressReg: false,
				samePropAddressRes: false,
				agreement: true,
				monthly: true,
				regAddress: {
					city: '',
					street: '',
					house: '',
					flat: ''
				},
				resAddress: {
					city: '',
					street: '',
					house: '',
					flat: ''
				},
				propAddress: {
					city: '',
					street: '',
					house: '',
					flat: '',
					year:''
				}
			}


			$scope.includeResidence = function() {
				if ($scope.insurer.sameAddress) {
					$scope.insurer.resAddress.city = $scope.insurer.regAddress.city;
					$scope.insurer.resAddress.street = $scope.insurer.regAddress.street;
					$scope.insurer.resAddress.house = $scope.insurer.regAddress.house;
					$scope.insurer.resAddress.flat = $scope.insurer.regAddress.flat;
				} else {
					$scope.insurer.resAddress.city = '';
					$scope.insurer.resAddress.street = '';
					$scope.insurer.resAddress.house = '';
					$scope.insurer.resAddress.flat = '';
				}

			}
			$scope.submitInsurerForm = function(isValid) {
				$scope.submittedInsurerForm = true;
				if (isValid) {
					debugger;
				}
			}

			//#endregion
		}
	])
.controller('TravelController', [
		'$scope', '$timeout', 'tourType', function ($scope, $timeout, tourType) {
			$scope.timestamp = new Date().getTime();
			//#region подготовка страницы
			$scope.tourFields = {
				title: 'туристов, выезжающих за рубеж',
				word:'туристов онлайн',
				'class': 'turist',
				img1: 'img/turist1.png',
				img2: 'img/turist2.png'

			}
			if (tourType) {
				switch (tourType) {
					case 'turizm':
						$scope.tourFields = {
							title: 'онлайн туризм',
							word: 'онлайн туризм',
							'class': 'turizm',
							img1: 'img/turizm1.png',
							img2: 'img/turizm2.png'
						}
						break;
				}
			}
			//#endregion

			$scope.disablePolicy = false;
			$scope.totalPolicyPrice = 639;
			$scope.showCallbackUp = false;

			$scope.buyStep = 'landing';

			$scope.today = new Date();
			$scope.today.setHours(0, 0, 0, 0);
			var day = $scope.today.getDate();
			var week = new Date((new Date()).setDate(day + 7));
			week.setHours(0, 0, 0, 0);
			var month = new Date((new Date()).setDate(day + 30));
			month.setHours(0, 0, 0, 0);
			var year = $scope.today.getFullYear();
			var nextYear = year + 1;
			var oneYear = new Date((new Date()).setFullYear(nextYear));
			oneYear.setHours(0, 0, 0, 0);

		$scope.travelCalc= {
			termType: 'single',
			currency: 'eur',
			tripStartDate: '',
			tripEndDate: '',
			tripStartDateMin: $scope.today,
			tripStartDateMax: oneYear,
			tripEndDateMin: $scope.today,
			tripEndDateMax: oneYear,
		};

	}
]);