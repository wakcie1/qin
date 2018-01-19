var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope) {
    $scope.size = 0;
    $scope.grid = [];

    function daAndXiao() {
        var height = 76 * $scope.size;
        var width = 76 * $scope.size;

        $scope.Contain = {
            "height": height + "px",
            "width": width + "px"
        }
    }

    $scope.$watch("size", function (v) {
        v = parseInt(v) || 4;
        $scope.grid = [];
        for (var i = 0; i < v * v; i++) {
            $scope.grid.push(0);
        }
        daAndXiao();
    });

    $scope.init = function () {
        $scope.size = 2;
        //$scope.grid = [0,0,0,0];
        daAndXiao();
    }
    $scope.changeColor = function (index) {
        var row = parseInt(index / ($scope.size));
        var col = index % ($scope.size);
        var dx = [0, 0, -1, 1, 0];
        var dy = [1, -1, 0, 0, 0];
        for (var d = 0; d < 5; d++) {
            row += dx[d];
            col += dy[d];
            if (col>=0&&row>=0&&col < $scope.size && row < $scope.size) {
                var temp = 1 - $scope.grid[row * $scope.size + col];
                $scope.grid.splice(row * $scope.size + col,1,temp);
            }
            row -= dx[d], col -= dy[d]; 
        }
        var k=0;
        for (var j = 0; j < $scope.size * $scope.size; j++) {
            if ($scope.grid[j] > 0)++k;
            if (k == ($scope.size * $scope.size)) {
                alert("Sucess");
                ++$scope.size;
            }
        }
    }
    $scope.up = function () {
        if ($scope.size < 9) {
            ++$scope.size;
        } else {
            alert("不能再升高了");
        } 
    }
    $scope.down = function () {
        if ($scope.size > 2) {
            --$scope.size;
        } else {
            alert("不能再降低了");
        }
        
    }

});
