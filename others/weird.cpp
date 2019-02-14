#include <iostream>
#include <vector>
#include <set>
#include <algorithm>
#include <numeric>
#include <functional>

using namespace std;

vector<int> get_divisors(int n) {
  auto divisor_set = set<int, greater<int>>();
  divisor_set.insert(1);
  int limit = n;
  for (int i = 2; i < limit; ++i) {
    if (n % i == 0) {
      divisor_set.insert(i);
      divisor_set.insert(n / i);
      limit = n / i;
    }
  }
  return vector<int>(divisor_set.begin(), divisor_set.end());
}

bool has_same_sum_of_divisors_subset(const int& n, const vector<int> &divisors, int pos, int sum) {
  if (sum == n) { return true; }
  if (sum > n) { return false; }
  if (pos == divisors.size()) { return false; }
  return has_same_sum_of_divisors_subset(n, divisors, pos + 1, sum + divisors[pos]) ||
    has_same_sum_of_divisors_subset(n, divisors, pos + 1, sum);
}

bool is_weird(int n) {
  // It is not known if any odd weird numbers exist.
  // If so, they must be greater than 10^21
  if (n % 2 == 1) { return false; }
  auto divisors = get_divisors(n);
  auto sum_of_divisors = accumulate(divisors.begin(), divisors.end(), 0);
  if (sum_of_divisors <= n) { return false; }
  if (has_same_sum_of_divisors_subset(n, divisors, 0, 0)) { return false; }
  return true;
}

const char * solve(int n) {
  return is_weird(n) ? "weird" : "not weird";
}

int main() {
  int count;
  cin >> count;
  for (int i = 0; i < count; ++i) {
    int n;
    cin >> n;
    cout << solve(n) << endl;
  }
  return 0;
}
