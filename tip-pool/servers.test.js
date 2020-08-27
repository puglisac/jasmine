describe("Servers test (with setup and tear-down)", function() {
	beforeEach(function() {
		// initialization logic
		serverNameInput.value = "Alice";
	});

	it("should add a new server to allServers on submitServerInfo()", function() {
		submitServerInfo();

		expect(Object.keys(allServers).length).toEqual(1);
		expect(allServers["server" + serverId].serverName).toEqual("Alice");
	});
	it("should not add a new server to allServers if input is empty", function() {
		serverNameInput.value = "";
		submitServerInfo();
		expect(Object.keys(allServers).length).toEqual(0);
	});

	it("should update server table on updateServerTable()", function() {
		submitServerInfo();
		updateServerTable();
		let serverTbody = document.querySelectorAll("#serverTable tbody tr td");
		expect(serverTbody.length).toEqual(2);
		expect(serverTbody[0].innerHTML).toEqual("Alice");
		expect(serverTbody[1].innerHTML).toEqual("$0.00");
	});

	afterEach(function() {
		serverNameInput.value = "";
		allServers = {};
		serverTbody.innerHTML = "";
		serverId = 0;
	});
});
