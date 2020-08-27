describe("helpers test", () => {
	beforeEach(function() {
		billAmtInput.value = 50;
		tipAmtInput.value = 10;
		submitPaymentInfo();
	});
	it("should calculate the total tip amount of all payments", function() {
		expect(sumPaymentTotal("tipAmt")).toEqual(10);
		billAmtInput.value = 80;
		tipAmtInput.value = 30;
		submitPaymentInfo();
		expect(sumPaymentTotal("tipAmt")).toEqual(40);
	});
	it("should calculate the total bill abount for all payments", function() {
		expect(sumPaymentTotal("billAmt")).toEqual(50);
		billAmtInput.value = 80;
		tipAmtInput.value = 30;
		submitPaymentInfo();
		expect(sumPaymentTotal("billAmt")).toEqual(130);
	});
	it("should calculate the sum of tip percent", function() {
		expect(sumPaymentTotal("tipPercent")).toEqual(20);
		billAmtInput.value = 80;
		tipAmtInput.value = 30;
		submitPaymentInfo();
		expect(sumPaymentTotal("tipPercent")).toEqual(58);
	});
	it("should generate new td from value and append to tr on append(tr,value)", function() {
		let newTr = document.createElement("tr");
		appendTd(newTr, "test");
		expect(newTr.children.length).toEqual(1);
		expect(newTr.firstChild.innerText).toEqual("test");
		expect(newTr.firstChild.tagName).toEqual("TD");
	});
	it("should calculate the  tip percentage", function() {
		expect(calculateTipPercent(80, 20)).toEqual(25);
	});
	afterEach(function() {
		allPayments = {};
		paymentId = 0;
		billAmtInput.value = "";
		tipAmtInput.value = "";
		paymentTbody.innerHTML = "";
		summaryTds[0].innerHTML = "";
		summaryTds[1].innerHTML = "";
		summaryTds[2].innerHTML = "";
	});
});
